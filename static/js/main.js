/* =========================
   MAIN.JS – FINAL POLISH
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");


  /* =========================
     MOBILE NAVBAR TOGGLE
     ========================= */
  const menuBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuBtn.classList.toggle("open");
    });

    // Close menu when clicking a link (mobile UX)
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuBtn.classList.remove("open");
      });
    });
  }

  /* =========================
     SMOOTH SCROLL
     ========================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* =========================
     SCROLL REVEAL ANIMATION
     ========================= */
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  /* =========================
     ACTIVE NAV ON SCROLL
     ========================= */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  /* =========================
     BUTTON MICRO-INTERACTION
     ========================= */
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });

});
