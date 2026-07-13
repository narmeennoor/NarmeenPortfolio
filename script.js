/*=========================================
TYPEWRITER EFFECT
=========================================*/

const roles = [

    "Frontend Developer",

    "Interactive UI Engineer",

    "Creative Problem Solver"

];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;

let charIndex = 0;

let deleting = false;

function typeWriter() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent = currentRole.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeWriter, 1400);

            return;

        }

    } else {

        typingText.textContent = currentRole.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeWriter, deleting ? 45 : 90);

}

typeWriter();

/*=========================================
MOBILE MENU
=========================================*/

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show-menu");

    menuBtn.classList.toggle("active");

});

/* Close menu when clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show-menu");

        menuBtn.classList.remove("active");

    });

});

/*=========================================
HEADER SCROLL EFFECT
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(11,17,32,.90)";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(11,17,32,.60)";

        header.style.boxShadow = "none";

    }

});

/*=========================================
BACK TO TOP
=========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    }

    else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

/*=========================================
SMOOTH PAGE LOADED ANIMATION
=========================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});