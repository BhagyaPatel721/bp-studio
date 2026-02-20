document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".tw-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("tw-visible");
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        section.classList.add("tw-hidden");
        observer.observe(section);
    });
});
