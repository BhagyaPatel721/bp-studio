document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".about-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("about-visible");
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        section.classList.add("about-hidden");
        observer.observe(section);
    });
});
