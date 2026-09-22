const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const inputs = contactForm.querySelectorAll("input");

    const name = inputs[0].value;
    const email = inputs[1].value;
    const business = inputs[2].value;

    const project = contactForm.querySelector("textarea").value;

    const message =
        "Hello TONY Web Solutions!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Business: " + business + "\n" +
        "Project: " + project;

    const whatsappNumber = "94767343422";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});


/* ================================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* ================================
   CLOSE MOBILE MENU
================================ */

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});