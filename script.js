
// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    menuToggle.textContent = nav.classList.contains("open")
        ? "✕"
        : "☰";
});

// FECHAR MENU AO CLICAR EM UM LINK

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

// ANIMAÇÃO DE ENTRADA

const sections = document.querySelectorAll(
    ".section, .music-content, .exist-art, .album-card"
);

sections.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(element => {
    observer.observe(element);
});

// DESTAQUE DO MENU

const pageSections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("#nav a");

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove("selected");

                if (
                    link.getAttribute("href") ===
                    "#" + entry.target.id
                ) {
                    link.classList.add("selected");
                }
            });
        }
    });
}, {
    threshold: 0.4
});

pageSections.forEach(section => {
    sectionObserver.observe(section);
});

// ANO AUTOMÁTICO NO RODAPÉ

const footerText = document.querySelector("footer p");

footerText.textContent =
    `© ${new Date().getFullYear()} MOSHROOM — ALL RIGHTS RESERVED.`;
