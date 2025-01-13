const nav = document.getElementById("vertical-nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links li");

// Afișare meniu la click pe buton
function toggleVerticalNav() {
  nav.classList.add("active");
  menuToggle.classList.add("hidden"); // Ascunde butonul
}

// Ascundere meniu când cursorul părăsește meniul
function hideVerticalNav() {
  nav.classList.remove("active");
  menuToggle.classList.remove("hidden"); // Afișează butonul
}

// Fade-out pentru secțiuni când cursorul iese
navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    link.classList.add("fade-out");
    setTimeout(() => link.classList.remove("fade-out"), 300); // Elimină efectul după tranziție
  });
});
