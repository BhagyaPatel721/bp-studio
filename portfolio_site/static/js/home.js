document.addEventListener("DOMContentLoaded", () => {

    console.log("Home page JS loaded");

    // Smooth scroll to projects
    const viewWorkBtn = document.querySelector('.btn.primary');
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', () => {
            document.querySelector('#projects')
                ?.scrollIntoView({ behavior: 'smooth' });
        });
    }

});
