document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the nav link for the section currently in view
const links = Array.from(document.querySelectorAll(".nav nav a"));
const sections = links.map(a => document.querySelector(a.getAttribute("href")));

function updateActive() {
  const offset = 120;
  let current = -1;
  sections.forEach((sec, i) => {
    if (sec && sec.getBoundingClientRect().top <= offset) current = i;
  });
  // At the very bottom of the page, the last section is active
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    current = sections.length - 1;
  }
  links.forEach((a, i) => a.classList.toggle("active", i === current));
}

window.addEventListener("scroll", updateActive, { passive: true });
window.addEventListener("resize", updateActive);
updateActive();
