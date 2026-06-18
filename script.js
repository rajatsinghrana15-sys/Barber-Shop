// Example: Change navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#000";
  } else {
    navbar.style.backgroundColor = "#333";
  }
});

console.log("Navbar script loaded successfully.");

// Help-Toggel
function openPopup() {
  document.getElementById("helpPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("helpPopup").style.display = "none";
}

// Bahar click karne par close
window.onclick = function (event) {
  let popup = document.getElementById("helpPopup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
};

// This code will ensure that the menu toggles when clicked.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  // Toggle active class to show/hide menu
  navLinks.classList.toggle("active");
});
