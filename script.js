// =====================
// Dynamic Typing Effect
// =====================
const texts = [
  "Web Developer",
  "Java Programmer",
  "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      erase();
    }, 1500);
    return;
  }

  setTimeout(type, 120);
})();

function erase() {
  letter = currentText.slice(0, --index);

  document.querySelector(".typing-text").textContent = letter;

  if (letter.length === 0) {
    count++;
    setTimeout(type, 300);
    return;
  }

  setTimeout(erase, 70);
}

// =====================
// Mobile Navigation
// =====================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav-active");
  });
});

// =====================
// EmailJS Integration
// =====================
(function () {
  emailjs.init("vU52zvzWwjR_rsSv1");
})();

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
  "service_yvkjybp",
  "template_ylqfck7",
  this
)
  .then(() => {
    formStatus.textContent = "Message sent successfully!";
    contactForm.reset();
  })
  .catch(() => {
    formStatus.textContent = "Failed to send message. Please try again.";
  });
});