// FAQ Accordion

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
        question.nextElementSibling;

        document
        .querySelectorAll(".faq-answer")
        .forEach(item => {

            if(item !== answer){

                item.classList.remove("show");

            }

        });

        answer.classList.toggle("show");

    });

});


// Movie Card Hover Effect

const movieCards =
document.querySelectorAll(".movie-card");

movieCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 10px 25px rgba(229,9,20,0.6)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});


// Navbar Background on Scroll

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(0,0,0,0.95)";

    }

    else{

        navbar.style.background =
        "rgba(0,0,0,0.7)";

    }

});