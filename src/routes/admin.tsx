import { createFileRoute, redirect } from "@tanstack/react-router";

// Admin panel removed from public access
export const Route = createFileRoute("/admin")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
