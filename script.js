// The On Trend - Menu
// Hover/pulse effects are handled in the page's inline styles.
// This file is wired up and ready for future features (e.g. cart, filters, order form).

// Highlight the active category in the nav bar as the user scrolls.
(function () {
  const navLinks = document.querySelectorAll(".menu-nav-link");
  const sections = Array.from(navLinks)
    .map((link) => document.getElementById(link.getAttribute("data-nav")))
    .filter(Boolean);

  if (!navLinks.length || !sections.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("data-nav") === id);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));

  // Set the initial active state immediately.
  setActive(sections[0].id);
})();
