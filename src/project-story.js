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
      <div class="project-story-controls">
        <div>
          <div class="project-story-label">
            <strong>${rtl ? "עקבו אחרי האות" : "Follow the signal"}</strong>
            <span class="project-story-hint"></span>
          </div>
          <div class="project-story-nav" role="group" aria-label="${rtl ? "בחירת פרויקט" : "Choose a project"}">
            ${steps.map((name, i) => `<button type="button" aria-controls="project-grid"><bdi>0${i + 1}</bdi> · ${name}</button>`).join("")}
          </div>
        </div>
        <svg class="project-story-circuit" viewBox="0 0 420 72" aria-hidden="true">
          <path class="story-route" d="M16 46 H87 Q96 46 96 36 V29 Q96 20 106 20 H165 Q174 20 174 30 V40 Q174 50 184 50 H247 Q257 50 257 40 V32 Q257 22 267 22 H324 Q335 22 335 32 V36 Q335 46 345 46 H404" />
          <path d="M174 40 V60 Q174 66 183 66 H246 Q257 66 257 56 V40 M356 46 L375 62 H404" />
          <path class="story-trace" pathLength="1" d="M174 40 V60 Q174 66 183 66 H246 Q257 66 257 56 V40" />
          <path class="story-trace" pathLength="1" d="M356 46 L375 62 H404" />
          <circle cx="16" cy="46" r="4" /><circle cx="212" cy="50" r="4" />
          <circle cx="404" cy="46" r="4" /><circle cx="404" cy="62" r="3" />
          <circle class="story-signal" cx="16" cy="46" r="5" />
        </svg>
      </div>
      <div class="project-story-viewport"></div>
    </div>`;
  grid.before(story);
  const sticky = story.querySelector(".project-story-sticky");
  const viewport = story.querySelector(".project-story-viewport");
  viewport.append(grid);

  const hint = story.querySelector(".project-story-hint");
  const buttons = [...story.querySelectorAll(".project-story-nav button")];
  const route = story.querySelector(".story-route");
  const signal = story.querySelector(".story-signal");
  const [backup, branch] = story.querySelectorAll(".story-trace");
  const clamp = (value) => Math.min(1, Math.max(0, value));
  const sign = rtl ? -1 : 1;
  let cards = [], stops = [], travel = 0, top = 0, frame = 0, active = -1, length = 0;

  function start() {
    return story.getBoundingClientRect().top + scrollY - top;
  }

  function render() {
    frame = 0;
    const mode = story.dataset.mode;
    if (!mode || !travel) return;
    const distance = mode === "scroll" ? scrollY - start() : viewport.scrollLeft * sign;
    const progress = clamp(distance / travel);
    if (mode === "scroll") story.style.setProperty("--story-shift", `${-sign * progress * travel}px`);

    const point = route.getPointAtLength(progress * length);
    signal.setAttribute("cx", point.x);
    signal.setAttribute("cy", point.y);
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
      return;
    }

    const mode = desktop.matches ? "scroll" : "swipe";
    if (story.dataset.mode !== mode) {
      story.dataset.mode = mode;
      length = route.getTotalLength();
      viewport.scrollLeft = 0;
      hint.textContent = mode === "scroll"
        ? (rtl ? "גללו מטה כדי לנוע בין הפרויקטים" : "Scroll down to move through the projects")
        : (rtl ? "החליקו הצידה או בחרו תחנה" : "Swipe sideways or choose a stop");
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

  function goTo(index, behavior) {
    if (story.dataset.mode === "scroll") {
      window.scrollTo({top: start() + stops[index], behavior});
    } else if (story.dataset.mode === "swipe") {
      viewport.scrollTo({left: stops[index] * sign, behavior});
    }
  }

  buttons.forEach((button, i) => button.addEventListener("click", () => goTo(i, "smooth")));
  grid.addEventListener("focusin", (event) => {
    if (story.dataset.mode !== "scroll") return;
    const index = cards.indexOf(event.target.closest(".project-card"));
    if (index < 0) return;
    const card = cards[index].getBoundingClientRect();
    const visible = viewport.getBoundingClientRect();
    if (card.left < visible.left - 2 || card.right > visible.right + 2) goTo(index, "instant");
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
