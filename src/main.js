// Force browser to always start at the top on page refresh
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

document.addEventListener("DOMContentLoaded", () => {
  // Ensure the page scrolls strictly to the top on fresh load
  window.scrollTo(0, 0);

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".animate-text-reveal, .fade-in-section",
  );

  animatedElements.forEach((el) => observer.observe(el));
});
