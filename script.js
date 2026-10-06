// ---------- Intro: a rocket flies across and reveals the name ----------
(function () {
  const h1 = document.querySelector(".hero h1");
  if (!h1) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.scrollY > 50 || location.hash) return;
  try { if (sessionStorage.getItem("rocketIntro")) return; sessionStorage.setItem("rocketIntro", "1"); } catch (e) {}

  const rocket = document.createElement("div");
  rocket.className = "rocket-fly";
  rocket.setAttribute("aria-hidden", "true");
  rocket.innerHTML = '<svg viewBox="0 0 130 40"><defs><linearGradient id="fl" x1="1" x2="0"><stop offset="0" stop-color="#f6b042"/><stop offset=".6" stop-color="#ef6a2a"/><stop offset="1" stop-color="#ef6a2a" stop-opacity="0"/></linearGradient></defs>'
    + '<g class="flame"><path d="M24 20 L-6 12 Q8 20 -6 28 Z" fill="url(#fl)"/></g>'
    + '<path d="M34 8 L50 2 L46 14 Z M34 32 L50 38 L46 26 Z" fill="#0f3a75"/>'
    + '<path d="M22 12 Q22 8 28 8 L84 8 Q112 10 126 20 Q112 30 84 32 L28 32 Q22 32 22 28 Z" fill="#f4f6fa" stroke="#9aa6b8" stroke-width="1.2"/>'
    + '<path d="M84 8 Q112 10 126 20 Q112 30 84 32 Q96 20 84 8 Z" fill="#0f3a75"/>'
    + '<rect x="56" y="8" width="6" height="24" fill="#0f3a75"/><circle cx="72" cy="20" r="5" fill="#cfe0f5" stroke="#0f3a75" stroke-width="1.5"/></svg>';
  document.body.appendChild(rocket);

  const r = h1.getBoundingClientRect();
  const w = h1.offsetWidth;
  const noseOffset = 126;               // nose x within the 130px rocket
  const y = r.top + r.height / 2 - 20;
  rocket.style.top = y + "px";
  const start = -140, end = window.innerWidth + 20, dur = 2600, t0 = performance.now();
  h1.style.clipPath = "inset(-10px " + w + "px -10px 0)";

  function frame(now) {
    const p = Math.min(1, (now - t0) / dur);
    const e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;   // ease in-out
    const x = start + (end - start) * e;
    rocket.style.transform = "translateX(" + x + "px)";
    const reveal = Math.max(0, Math.min(w, x + noseOffset - r.left));
    h1.style.clipPath = "inset(-10px " + (w - reveal) + "px -10px 0)";
    if (p < 1) requestAnimationFrame(frame);
    else { h1.style.clipPath = ""; rocket.remove(); }
  }
  requestAnimationFrame(frame);
})();

document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Nav: highlight the section currently in view ----------
const links = Array.from(document.querySelectorAll(".nav nav a"));
const sections = links.map(a => document.querySelector(a.getAttribute("href")));

function updateActive() {
  const offset = 120;
  let current = -1;
  sections.forEach((sec, i) => {
    if (sec && sec.getBoundingClientRect().top <= offset) current = i;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    current = sections.length - 1;
  }
  links.forEach((a, i) => a.classList.toggle("active", i === current));
}
window.addEventListener("scroll", updateActive, { passive: true });
window.addEventListener("resize", updateActive);
updateActive();

// ---------- Projects: grid, detail view, photo lightbox ----------
(function () {
  const PROJECTS = window.PROJECTS || [];
  const grid = document.getElementById("project-grid");
  const pv = document.getElementById("project-view");
  const lb = document.getElementById("lightbox");
  if (!grid || !pv || !lb || !PROJECTS.length) return;

  const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18L18 6M8 6h10v10"/></svg>';
  const ARROW_RIGHT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6"/></svg>';
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = id => PROJECTS.find(p => p.id === id);

  // Grid of cards
  grid.innerHTML = PROJECTS.map(p => `
    <a class="pcard" href="#/${p.id}" aria-label="${esc(p.title)}: view project details">
      <div class="pcard-cover ${p.cover ? (p.coverFit === "contain" ? "contain" : "") : "cover-ph"}">
        ${p.cover ? `<img src="${p.cover}" alt="${esc(p.coverAlt || p.title)}" loading="lazy" />` : `<span>Photo coming soon</span>`}
      </div>
      <div class="pcard-meta"><span>${esc(p.tags.join(" · "))}</span><span>${esc(p.dates)}</span></div>
      <h3 class="pcard-title">${esc(p.title)} ${ARROW}</h3>
      <p class="pcard-desc">${esc(p.summary)}</p>
    </a>`).join("");

  // Detail view
  let current = null;
  let lastFocus = null;
  let lbList = [];
  let lbIndex = 0;

  function detailHTML(p, next) {
    const empty = text => `<div class="pv-empty">${text}</div>`;
    return `
      <div class="pv-bar">
        <button type="button" class="pv-back">&larr; All projects</button>
        <button type="button" class="pv-x" aria-label="Close project">&times;</button>
      </div>
      <div class="pv-inner">
        <p class="pv-eyebrow"><span>${esc(p.tags.join(" · "))}</span><span>${esc(p.dates)}</span></p>
        <h1 id="pv-title">${esc(p.title)}</h1>
        <p class="pv-lead">${esc(p.subtitle)}</p>
        ${p.cover
          ? `<div class="pv-hero ${p.coverFit === "contain" ? "contain" : ""}"><img src="${p.cover}" alt="${esc(p.coverAlt || p.title)}" /></div>`
          : `<div class="pv-hero cover-ph"><span>Photo coming soon</span></div>`}
        <dl class="pv-meta">
          <div><dt>My role</dt><dd>${esc(p.role)}</dd></div>
          <div><dt>Team / organization</dt><dd>${esc(p.org)}</dd></div>
          <div><dt>Timeline</dt><dd>${esc(p.timeline)}</dd></div>
        </dl>

        <section class="pv-section">
          <h2>Synopsis</h2>
          ${p.synopsis.map(t => `<p>${esc(t)}</p>`).join("")}
        </section>

        <section class="pv-section">
          <h2>My role</h2>
          <ul class="pv-roles">${p.roles.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
          <ul class="tags" style="margin-top:18px">${p.tools.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
        </section>

        ${p.facts && p.facts.length ? `
        <section class="pv-section">
          <h2>Key numbers</h2>
          ${p.factsNote ? `<p class="pv-note">${esc(p.factsNote)}</p>` : ""}
          <div class="pv-facts">${p.facts.map(f => `<div class="fact"><b>${esc(f.value)}</b><span>${esc(f.label)}</span></div>`).join("")}</div>
        </section>` : ""}

        <section class="pv-section">
          <h2>Photos</h2>
          ${p.photos.length
            ? `<div class="pv-photos">${p.photos.map((ph, i) => `
                <button type="button" class="pv-photo" data-i="${i}" aria-label="Enlarge photo: ${esc(ph.caption)}">
                  <img src="${ph.thumb || ph.src}" alt="${esc(ph.caption)}" loading="lazy" class="${ph.fit === "contain" ? "contain" : ""}" ${ph.pos ? `style="object-position:${esc(ph.pos)}"` : ""} />
                  <span class="pv-cap">${esc(ph.caption)}</span>
                </button>`).join("")}</div>`
            : empty("Photos coming soon.")}
        </section>

        <section class="pv-section">
          <h2>Videos</h2>
          ${p.videos.length
            ? `<div class="pv-videos">${p.videos.map(v => `
                <figure class="pv-video">
                  <video controls preload="metadata" playsinline ${v.poster ? `poster="${v.poster}"` : ""}><source src="${v.src}" type="video/mp4" /></video>
                  <figcaption>${esc(v.caption)}</figcaption>
                </figure>`).join("")}</div>`
            : empty("Videos coming soon.")}
        </section>

        ${p.links && p.links.length ? `
        <section class="pv-section">
          <h2>More</h2>
          <div class="pv-links">${p.links.map(l => `<a class="btn" href="${l.href}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>
        </section>` : ""}

        <div class="pv-next"><a href="#/${next.id}">Next: ${esc(next.title)} ${ARROW_RIGHT}</a></div>
      </div>`;
  }

  function showProject(id) {
    const p = byId(id);
    if (!p) return hideProject();
    const wasOpen = !pv.hidden;
    if (!wasOpen) lastFocus = document.activeElement;
    const next = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length];
    pv.innerHTML = detailHTML(p, next);
    pv.hidden = false;
    pv.scrollTop = 0;
    document.body.classList.add("pv-open");
    document.title = `${p.title} | Chase Loveless`;
    current = id;
    const back = pv.querySelector(".pv-back");
    if (back) back.focus({ preventScroll: true });
  }

  function hideProject() {
    if (pv.hidden) return;
    closeLightbox();
    pv.hidden = true;
    pv.innerHTML = "";
    document.body.classList.remove("pv-open");
    document.title = "Chase Loveless | Aerospace Engineering Portfolio";
    current = null;
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  function route() {
    const m = location.hash.match(/^#\/([\w-]+)$/);
    if (m && byId(m[1])) { if (current !== m[1]) showProject(m[1]); }
    else hideProject();
  }

  function goTo(hash) {
    history.pushState({ pv: true }, "", hash);
    route();
  }

  function closeProject() {
    if (history.state && history.state.pv) history.back();
    else { history.replaceState(null, "", location.pathname + location.search); route(); }
  }

  // Lightbox
  function openLightbox(list, index) {
    lbList = list; lbIndex = index;
    lb.hidden = false;
    renderLightbox();
    lb.querySelector(".lb-close").focus({ preventScroll: true });
  }
  function renderLightbox() {
    const ph = lbList[lbIndex];
    if (!ph) return;
    const img = lb.querySelector("img");
    img.src = ph.src; img.alt = ph.caption;
    lb.querySelector(".lb-cap").textContent = `${ph.caption}  (${lbIndex + 1} of ${lbList.length})`;
    const many = lbList.length > 1;
    lb.querySelector(".lb-prev").hidden = !many;
    lb.querySelector(".lb-next").hidden = !many;
  }
  function stepLightbox(d) {
    lbIndex = (lbIndex + d + lbList.length) % lbList.length;
    renderLightbox();
  }
  function closeLightbox() {
    if (lb.hidden) return;
    lb.hidden = true;
    lb.querySelector("img").removeAttribute("src");
    const open = pv.querySelector(`.pv-photo[data-i="${lbIndex}"]`);
    if (open) open.focus({ preventScroll: true });
  }

  // Events
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#/"]');
    if (a && !e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) {
      e.preventDefault();
      goTo(a.getAttribute("href"));
      return;
    }
    if (e.target.closest(".pv-back, .pv-x")) { closeProject(); return; }
    const photo = e.target.closest(".pv-photo");
    if (photo && current) {
      openLightbox(byId(current).photos, Number(photo.dataset.i));
      return;
    }
    if (e.target.closest(".lb-close") || e.target === lb) closeLightbox();
    else if (e.target.closest(".lb-prev")) stepLightbox(-1);
    else if (e.target.closest(".lb-next")) stepLightbox(1);
  });

  document.addEventListener("keydown", e => {
    if (!lb.hidden) {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") stepLightbox(-1);
      else if (e.key === "ArrowRight") stepLightbox(1);
    } else if (!pv.hidden && e.key === "Escape") {
      closeProject();
    }
  });

  window.addEventListener("popstate", route);
  window.addEventListener("hashchange", route);
  route();
})();
