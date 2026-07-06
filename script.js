// ==============================
// Smooth Scroll for Navigation
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ==============================
// Active Navbar Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ==============================
// Back to Top Button
// ==============================

const button = document.createElement("button");

button.innerHTML = "↑";

button.id = "topBtn";

document.body.appendChild(button);

button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.padding = "12px 16px";
button.style.border = "none";
button.style.borderRadius = "50%";
button.style.background = "#38bdf8";
button.style.color = "#fff";
button.style.cursor = "pointer";
button.style.display = "none";
button.style.fontSize = "18px";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300)
        button.style.display = "block";
    else
        button.style.display = "none";

});

button.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// ==============================
// Contact Form
// ==============================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});

// ==============================
// Fade Animation
// ==============================

const cards = document.querySelectorAll(
".skill-card,.project-card,.certificate-card,.education-card,.resume-card"
);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity=0;
card.style.transform="translateY(40px)";
card.style.transition="0.8s";

observer.observe(card);

});