// Menambahkan efek klik pada tautan
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = e.target.getAttribute("href");

            // Animasi klik kecil
            link.style.transition = "transform 0.2s ease";
            link.style.transform = "scale(1.1)";
            
            setTimeout(() => {
                window.open(target, "_blank");
                link.style.transform = "scale(1)";
            }, 200);
        });
    });

    // Efek scroll reveal untuk bagian konten
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    });
});
