import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().toLowerCase().email("Please enter a valid email address").max(150),
  phone: z.string().trim().max(25).optional(),
  projectType: z.string().trim().min(1, "Please select a project type"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactResponse {
  success: boolean;
  message: string;
  error?: string;
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return contactSchema.parse(data);
  })
  .handler(async ({ data }): Promise<ContactResponse> => {
    try {
      // Spam honeypot verification
      if (data.honeypot && data.honeypot.length > 0) {
        return {
          success: false,
          message: "Submission flagged by anti-spam filter.",
        };
      }

      // Log server-side record securely
      console.log("[Contact Submission Received]", {
        name: data.name,
        email: data.email,
        phone: data.phone || "Not provided",
        projectType: data.projectType,
        messageLength: data.message.length,
        timestamp: new Date().toISOString(),
      });

      // If Supabase environment variables exist, save to database
      const supabaseUrl = process.env.VITE_SUPABASE_URL;
      const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseKey && !supabaseUrl.includes("placeholder")) {
        try {
          const { createClient } = await import("@supabase/supabase-js");
          const client = createClient(supabaseUrl, supabaseKey);
          await client.from("contact_submissions").insert({
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            project_type: data.projectType,
            message: data.message,
            created_at: new Date().toISOString(),
          });
        } catch (dbErr) {
          console.warn("[Contact DB Save Note]", dbErr);
          // Continues so user receives confirmation
        }
      }

      return {
        success: true,
        message: "Thank you! Your message has been received. Yash will respond to your email within 24 hours.",
      };
    } catch (err: any) {
      console.error("[Contact Form Error]", err);
      return {
        success: false,
        message: "Unable to process your enquiry. Please reach Yash directly at yashrai6635@gmail.com.",
        error: err.message || "Unknown error",
      };
    }
  });
