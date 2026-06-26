// ================================
// FAQ Accordion
// ================================

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        document.querySelectorAll(".answer").forEach((item) => {
            if (item !== answer) {
                item.classList.remove("show");
            }
        });

        answer.classList.toggle("show");

    });
});

// ================================
// Navbar Background on Scroll
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.transition = "0.3s";
    } else {
        navbar.style.background = "rgba(0,0,0,0.85)";
    }

});

// ================================
// Movie Card Hover Animation
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.08)";
        card.style.transition = "0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});

// ================================
// Smooth Scroll for Navigation
// ================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ================================
// Hero Button Interaction
// ================================

const watchBtn = document.querySelector(".watch-btn");

if (watchBtn) {

    watchBtn.addEventListener("click", () => {
        alert("Welcome! This is a demo streaming platform UI created using HTML, CSS, and JavaScript.");
    });

}