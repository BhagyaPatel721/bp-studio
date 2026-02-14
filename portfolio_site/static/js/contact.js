document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", () => {
        form.classList.add("form-sent");
    });
});
