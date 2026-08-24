// ============================================
// CODEVDA TASK 2
// Interactive Navigation & Buttons
// ============================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


// Mobile navigation
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }
    });


    // Close mobile menu after clicking a link
    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
        });
    });
}


// Contact button interaction
const contactButton = document.getElementById("contactButton");

if (contactButton) {
    contactButton.addEventListener("click", () => {
        alert(
            "Thank you for your interest! We would love to create something exceptional with you."
        );
    });
}


// Add shadow to navbar while scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.style.boxShadow =
            "0 4px 20px rgba(38, 19, 17, 0.20)";
    } else {
        navbar.style.boxShadow =
            "0 2px 15px rgba(38, 19, 17, 0.12)";
    }
});