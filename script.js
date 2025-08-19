// Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
});

// Typing Effect
const typingText = ["Web Developer", "Programmer", "Tech Enthusiast", "BCA Student"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < typingText[index].length) {
    typingElement.textContent += typingText[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}
function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % typingText.length;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Contact Form
function sendMessage(event) {
  event.preventDefault();
  document.getElementById("form-status").innerText = "Message sent successfully!";
  setTimeout(() => {
    document.getElementById("form-status").innerText = "";
  }, 3000);
}
