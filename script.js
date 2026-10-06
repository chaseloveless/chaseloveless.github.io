// ---------- Intro: a rocket flies across and reveals the name (plays on every load) ----------
(function () {
  const h1 = document.querySelector(".hero h1");
  if (!h1) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.scrollY > 50 || location.hash) return;

  const rocket = document.createElement("div");
  rocket.className = "rocket-fly";
  rocket.setAttribute("aria-hidden", "true");
  rocket.innerHTML = '<svg viewBox="0 0 200 60"><defs>'
    + '<linearGradient id="rBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".18" stop-color="#dfe5ee"/><stop offset=".5" stop-color="#9aa6b6"/><stop offset=".78" stop-color="#e8edf4"/><stop offset="1" stop-color="#5f6b7c"/></linearGradient>'
    + '<linearGradient id="rNose" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fa0e8"/><stop offset=".25" stop-color="#2a5fb8"/><stop offset=".6" stop-color="#12306a"/><stop offset="1" stop-color="#4b7bd0"/></linearGradient>'
    + '<linearGradient id="rFin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4a5a73"/><stop offset=".5" stop-color="#9fb0c8"/><stop offset="1" stop-color="#2c3a52"/></linearGradient>'
    + '<radialGradient id="rWin" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset=".35" stop-color="#9fd0ff"/><stop offset="1" stop-color="#0f3a75"/></radialGradient>'
    + '<linearGradient id="rFlame" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#fff6cc"/><stop offset=".25" stop-color="#ffc247"/><stop offset=".6" stop-color="#ef5a22" stop-opacity=".9"/><stop offset="1" stop-color="#ef5a22" stop-opacity="0"/></linearGradient>'
    + '</defs>'
    + '<g class="flame"><path d="M26 22 L-60 30 L26 38 Z" fill="url(#rFlame)"/><path d="M26 25 L-15 30 L26 35 Z" fill="#fffbe6" opacity=".9"/></g>'
    + '<path d="M44 16 L80 16 L63 1 L46 4 Z M44 44 L80 44 L63 59 L46 56 Z" fill="url(#rFin)" stroke="#2c3a52" stroke-width=".8"/>'
    + '<path d="M33 24 L22 21 L22 39 L33 36 Z" fill="#3a4658" stroke="#1d2735" stroke-width=".8"/>'
    + '<path d="M38 16 L150 16 L150 44 L38 44 Q32 44 32 38 L32 22 Q32 16 38 16 Z" fill="url(#rBody)" stroke="#6b7789" stroke-width=".9"/>'
    + '<path d="M150 16 Q184 18 198 30 Q184 42 150 44 Z" fill="url(#rNose)" stroke="#0d2552" stroke-width=".9"/>'
    + '<rect x="94" y="16" width="9" height="28" fill="url(#rNose)"/><rect x="132" y="16" width="3" height="28" fill="#6b7789" opacity=".7"/>'
    + '<circle cx="118" cy="30" r="8" fill="url(#rWin)" stroke="#3a4658" stroke-width="2"/>'
    + '<rect x="38" y="19" width="108" height="3.5" rx="1.7" fill="#fff" opacity=".7"/>'
    + '<path d="M156 21 Q176 22 188 28" stroke="#fff" stroke-width="2" fill="none" opacity=".55" stroke-linecap="round"/></svg>';
  document.body.appendChild(rocket);

  const r = h1.getBoundingClientRect();
  const w = h1.offsetWidth;
  const noseOffset = 198;               // nose tip x within the 200px rocket
  rocket.style.top = (r.top + r.height / 2 - 30) + "px";
  const start = -280, end = window.innerWidth + 40, dur = 5000, t0 = performance.now();
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
