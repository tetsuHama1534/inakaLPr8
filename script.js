const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");
const backToTop = document.querySelector("[data-back-to-top]");
const year = document.querySelector("[data-year]");
const filterButtons = document.querySelectorAll("[data-filter]");
const articleCards = document.querySelectorAll("[data-tags]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTag = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    articleCards.forEach((card) => {
      const tags = card.dataset.tags.split(",");
      const shouldShow = selectedTag === "all" || tags.includes(selectedTag);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 420;
  backToTop?.classList.toggle("is-visible", scrolled);
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
