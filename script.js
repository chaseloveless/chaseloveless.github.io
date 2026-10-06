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

// Click-to-expand media viewer (thumbnails on the left, expanded view on the right)
document.querySelectorAll(".viewer-card").forEach(card => {
  const thumbs = Array.from(card.querySelectorAll(".thumb"));
  const stage = card.querySelector(".stage");
  const title = card.querySelector(".vc-title");
  const open = card.querySelector(".vc-open");
  const viewer = card.querySelector(".viewer");

  function show(btn) {
    thumbs.forEach(t => {
      const on = t === btn;
      t.classList.toggle("active", on);
      t.setAttribute("aria-pressed", on ? "true" : "false");
    });
    const { type, src, caption, poster } = btn.dataset;
    stage.textContent = "";
    if (type === "video") {
      const v = document.createElement("video");
      v.controls = true; v.playsInline = true; v.preload = "metadata";
      if (poster) v.poster = poster;
      v.src = src;
      stage.appendChild(v);
      open.hidden = true;
    } else {
      const img = new Image();
      img.src = src; img.alt = caption;
      stage.appendChild(img);
      open.href = src;
      open.hidden = false;
    }
    title.textContent = caption;
  }

  thumbs.forEach(t => t.addEventListener("click", () => {
    show(t);
    // On phones the viewer sits below the thumbnails, so bring it into view
    if (window.innerWidth <= 760) viewer.scrollIntoView({ behavior: "smooth", block: "center" });
  }));
});
