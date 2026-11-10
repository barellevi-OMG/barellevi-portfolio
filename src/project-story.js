(() => {
  "use strict";

  const work = document.querySelector(".recruiter-home #work");
  const grid = work?.querySelector("#project-grid");
  const header = document.querySelector(".site-header");
  if (!grid || !header) return;

  const rtl = document.documentElement.dir === "rtl";
  const steps = rtl ? ["להקים", "לייצב", "לחבר"] : ["Build", "Stabilize", "Connect"];
  const desktop = matchMedia("(min-width: 900px) and (min-height: 680px) and (pointer: fine)");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const story = document.createElement("div");
  story.className = "project-story";
  story.innerHTML = `
    <div class="project-story-sticky">
      <div class="project-story-viewport"></div>
      <div class="project-story-controls">
        <strong class="project-story-label" id="project-story-label">${rtl ? "עקבו אחרי האות" : "Follow the signal"}</strong>
        <div class="project-story-dial">
          <svg class="project-story-circuit" viewBox="0 0 420 72" aria-hidden="true">
            <path class="story-route" d="M16 46 H87 Q96 46 96 36 V29 Q96 20 106 20 H165 Q174 20 174 30 V40 Q174 50 184 50 H247 Q257 50 257 40 V32 Q257 22 267 22 H324 Q335 22 335 32 V36 Q335 46 345 46 H404" />
            <path d="M174 40 V60 Q174 66 183 66 H246 Q257 66 257 56 V40 M356 46 L375 62 H404" />
            <path class="story-trace" pathLength="1" d="M174 40 V60 Q174 66 183 66 H246 Q257 66 257 56 V40" />
            <path class="story-trace" pathLength="1" d="M356 46 L375 62 H404" />
            <circle cx="16" cy="46" r="4" /><circle cx="212" cy="50" r="4" />
            <circle cx="404" cy="46" r="4" /><circle cx="404" cy="62" r="3" />
            <circle class="story-signal" cx="16" cy="46" r="5" />
            <g class="story-pointer">
              <path d="M0 0 L3 16 L7 11 L13 10 Z" />
            </g>
          </svg>
          <input class="project-story-scrubber" type="range" min="0" max="100" value="0"
            aria-labelledby="project-story-label" aria-controls="project-grid">
        </div>
        <div class="project-story-nav" role="group" aria-label="${rtl ? "בחירת פרויקט" : "Choose a project"}">
          ${steps.map((name, i) => `<button type="button" aria-controls="project-grid"><bdi>0${i + 1}</bdi> · ${name}</button>`).join("")}
        </div>
      </div>
    </div>`;
  grid.before(story);
  const sticky = story.querySelector(".project-story-sticky");
  const viewport = story.querySelector(".project-story-viewport");
  viewport.append(grid);

  work.insertAdjacentHTML("beforeend", `
    <figure class="project-story-reveal">
      <div class="project-story-reveal-frame">
        <img src="/assets/cluster.svg" alt="" width="240" height="170" loading="lazy">
      </div>
    </figure>`);
  const reveal = work.querySelector(".project-story-reveal");
  const circuit = story.querySelector(".project-story-circuit");
  const scrubber = story.querySelector(".project-story-scrubber");
  const buttons = [...story.querySelectorAll(".project-story-nav button")];
  const route = story.querySelector(".story-route");
  const signal = story.querySelector(".story-signal");
  const pointer = story.querySelector(".story-pointer");
  const [backup, branch] = story.querySelectorAll(".story-trace");
  const clamp = (value) => Math.min(1, Math.max(0, value));
  const sign = rtl ? -1 : 1;
  let cards = [], stops = [], travel = 0, top = 0, frame = 0, active = -1, length = 0;
  let dragId = null;

  function start() {
    return story.getBoundingClientRect().top + scrollY - top;
  }

  function render() {
    frame = 0;
    if (!reducedMotion.matches) {
      const {top: revealTop, height} = reveal.getBoundingClientRect();
      const progress = clamp((innerHeight * 0.9 - revealTop) / (height * 0.8));
      reveal.style.setProperty("--reveal-inset", `${46 * (1 - progress)}%`);
    }
    const mode = story.dataset.mode;
    if (!mode || !travel) return;
    const distance = mode === "scroll" ? scrollY - start() : viewport.scrollLeft * sign;
    const progress = clamp(distance / travel);
    if (mode === "scroll") story.style.setProperty("--story-shift", `${-sign * progress * travel}px`);

    const point = route.getPointAtLength(progress * length);
    signal.setAttribute("cx", point.x);
    signal.setAttribute("cy", point.y);
    pointer.setAttribute("transform", `translate(${point.x + sign * 7} ${point.y + 3}) scale(${sign} 1)`);
    scrubber.value = Math.round(progress * 100);
    backup.style.strokeDashoffset = 1 - clamp((progress - 0.29) / 0.25);
    branch.style.strokeDashoffset = 1 - clamp((progress - 0.83) / 0.17);

    const current = stops.reduce((nearest, stop, i) =>
      Math.abs(distance - stop) < Math.abs(distance - stops[nearest]) ? i : nearest, 0);
    if (current !== active) {
      buttons[active]?.removeAttribute("aria-current");
      buttons[current].setAttribute("aria-current", "step");
      active = current;
    }
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(render);
  }

  function measure() {
    cards = [...grid.querySelectorAll(".project-card")];
    if (reducedMotion.matches || cards.length !== buttons.length) {
      delete story.dataset.mode;
      schedule();
      return;
    }

    const mode = desktop.matches ? "scroll" : "swipe";
    if (story.dataset.mode !== mode) {
      story.dataset.mode = mode;
      length = route.getTotalLength();
      viewport.scrollLeft = 0;
    }
    top = header.offsetHeight + 12;
    story.style.setProperty("--story-top", `${top}px`);
    story.style.setProperty("--story-height", `${sticky.offsetHeight}px`);

    const first = cards[0].getBoundingClientRect();
    const positions = cards.map((card) => {
      const rect = card.getBoundingClientRect();
      return rtl ? first.right - rect.right : rect.left - first.left;
    });
    travel = Math.max(0, positions.at(-1) + cards.at(-1).offsetWidth - viewport.clientWidth);
    story.style.setProperty("--story-travel", `${travel}px`);
    stops = positions.map((position) => Math.min(position, travel));
    schedule();
  }

  function goToDistance(distance, behavior) {
    if (story.dataset.mode === "scroll") {
      window.scrollTo({top: start() + distance, behavior});
    } else if (story.dataset.mode === "swipe") {
      viewport.scrollTo({left: distance * sign, behavior});
    }
  }

  function scrub(clientX) {
    const x = new DOMPoint(clientX, 0).matrixTransform(circuit.getScreenCTM().inverse()).x;
    let low = 0, high = length;
    // The route always advances along x, so the dot can follow the pointer through its bends.
    for (let i = 0; i < 12; i++) {
      const mid = (low + high) / 2;
      if (route.getPointAtLength(mid).x < x) low = mid;
      else high = mid;
    }
    goToDistance(((low + high) / 2) / length * travel, "instant");
  }

  scrubber.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || dragId !== null || !length || !travel) return;
    event.preventDefault();
    scrubber.focus({preventScroll: true});
    scrubber.setPointerCapture(event.pointerId);
    dragId = event.pointerId;
    story.classList.add("is-scrubbing");
    scrub(event.clientX);
  });
  scrubber.addEventListener("pointermove", (event) => {
    if (event.pointerId === dragId) scrub(event.clientX);
  });
  scrubber.addEventListener("lostpointercapture", (event) => {
    if (event.pointerId !== dragId) return;
    dragId = null;
    story.classList.remove("is-scrubbing");
  });
  scrubber.addEventListener("input", () => {
    const value = scrubber.valueAsNumber;
    let distance = value / 100 * travel;
    if (story.dataset.mode === "swipe" && active >= 0 && value > 0 && value < 100) {
      const current = Math.round(viewport.scrollLeft * sign / travel * 100);
      const next = Math.max(0, Math.min(active + Math.sign(value - current), stops.length - 1));
      distance = stops[next];
    }
    goToDistance(distance, "instant");
  });

  buttons.forEach((button, i) => button.addEventListener("click", () => goToDistance(stops[i], "smooth")));
  grid.addEventListener("focusin", (event) => {
    if (story.dataset.mode !== "scroll") return;
    const index = cards.indexOf(event.target.closest(".project-card"));
    if (index < 0) return;
    const card = cards[index].getBoundingClientRect();
    const visible = viewport.getBoundingClientRect();
    if (card.left < visible.left - 2 || card.right > visible.right + 2) goToDistance(stops[index], "instant");
  });

  window.addEventListener("scroll", schedule, {passive: true});
  window.addEventListener("resize", measure, {passive: true});
  viewport.addEventListener("scroll", schedule, {passive: true});
  desktop.addEventListener("change", measure);
  reducedMotion.addEventListener("change", measure);
  new MutationObserver(measure).observe(grid, {childList: true});
  const resize = new ResizeObserver(measure);
  resize.observe(sticky);
  resize.observe(header);
  measure();
})();
