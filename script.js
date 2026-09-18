/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* Close menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section, .challenge-card, .direction-card, .hardware-card, .timeline-item, .application-card, .speech-card, .roadmap-item"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ================= NAVBAR SCROLL ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(6,7,10,0.94)";

    } else {

        navbar.style.background =
            "rgba(6,7,10,0.75)";

    }

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    "nav a"
);

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (
            window.scrollY >= sectionTop
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= SMOOTH BUTTON EFFECT ================= */

document.querySelectorAll(
    ".primary-btn, .secondary-btn"
).forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform =
            "scale(.97)";

        setTimeout(() => {

            button.style.transform =
                "";

        }, 120);

    });

});