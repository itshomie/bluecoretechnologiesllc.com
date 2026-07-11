document.documentElement.classList.remove("no-js");

const navToggle = document.querySelector("[data-nav-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const navLabel = document.querySelector("[data-nav-label]");

function closeNavigation() {
  if (!navToggle || !navPanel) return;
  navToggle.setAttribute("aria-expanded", "false");
  navPanel.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  if (navLabel) navLabel.textContent = "Menu";
}

if (navToggle && navPanel) {
  navToggle.addEventListener("click", () => {
    const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(willOpen));
    navPanel.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("nav-open", willOpen);
    if (navLabel) navLabel.textContent = willOpen ? "Close" : "Menu";
  });

  navPanel.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeNavigation();
  });
}
