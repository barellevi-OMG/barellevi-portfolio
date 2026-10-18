(function () {
  "use strict";
  const model = window.PORTFOLIO;
  if (!model) return;
  const he=window.SITE_LANG==="he",base=window.SITE_PREFIX||"",jobs=window.SITE_JOB_PAGES||{};
  const txt=(en,hebrew)=>he?hebrew:en;
  const $ = (selector, root) => (root || document).querySelector(selector);
  const $$ = (selector, root) => Array.from((root || document).querySelectorAll(selector));
  const cardArea = $("#project-grid"), intro = $("#track-intro"), dialog = $("#project-dialog");
  let activeTrack = "all";
  const routes = { infrastructure:"infrastructure", automation:"automation", operations:"operations", leadership:"leadership" };
  const recruitmentRoutes = {
    "mobileye-infrastructure":"infrastructure",
    "mobileye-technical-operations":"operations",
    "technical-operations":"operations",
    "automation-engineering":"automation",
    "technical-leadership":"leadership"
  };
  const escapeHTML = (v) => String(v == null ? "" : v).replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[ch]);
  function linkFor(track) { return base+(track==="all"?"/":"/"+track+"/"); }
  function fromLocation() {
    const parts = location.pathname.replace(/\/+$/,"").split("/").filter(Boolean);
    const pathname = parts[0]==="he"?parts.slice(1):parts;
    return routes[pathname[0]] || (pathname[0] === "for" ? recruitmentRoutes[pathname[1]] : null) || "all";
  }
  function enableImageFallbacks(root=document) {
    $$('img[src^="https://"]',root).forEach(img=>{
      if(img.dataset.fallbackBound)return;
      img.dataset.fallbackBound="true";
      img.addEventListener("error",()=>{
        if(img.dataset.localFallbackApplied==="true")return;
        img.dataset.localFallbackApplied="true";
        img.classList.add("image-fallback");
        img.src=img.dataset.fallback || "/assets/server-stack.svg";
        img.alt="Conceptual vector illustration; source photograph unavailable";
      });
      if(img.complete && img.naturalWidth===0) img.dispatchEvent(new Event("error"));
    });
  }
  function showProfile(track) {
    const p = model.profiles?.[track] || model.profiles.all;
    const h = $("#hero-title"), e = $(".hero-copy .eyebrow"), sub = $(".hero-subtitle"), kicker = $("#role-kicker");
    h.innerHTML = p.title; sub.textContent = p.subtitle;
    e.innerHTML='<span class="line-decor"></span> '+escapeHTML(p.eyebrow);
    kicker.textContent=p.note;
    const meta=document.querySelector('meta[name="description"]');
    if(meta)meta.content=p.note+" — "+p.subtitle;
  }
  function showComponent(key) {
    const c=model.components.find(x=>x.key===key);
    if(!c)return;
    $$(".component-tab").forEach(tab=>{
      const selected=tab.dataset.component===key;
      tab.classList.toggle("active",selected);
      tab.setAttribute("aria-selected",String(selected));
      tab.tabIndex=selected?0:-1;
    });
    $("#component-photo").src=model.images[c.photo];
    $("#component-photo").alt="Representative technology photograph: "+c.title;
    $("#component-photo").dataset.fallback=c.visual;
    $("#component-photo").dataset.localFallbackApplied="false";
    $("#component-photo").classList.remove("image-fallback");
    $("#component-schematic").src=c.visual;
    $("#component-schematic").alt="Conceptual illustration: "+c.title;
    $("#component-stage-number").textContent=c.number;
    $("#component-number").textContent=c.number+" / 04";
    $("#component-title").textContent=c.title;
    $("#component-caption").textContent=c.caption;
    $("#component-facts").innerHTML=c.facts.map(x=>'<span>'+escapeHTML(x)+'</span>').join("");
    $("#component-quote").textContent=c.accent;
    enableImageFallbacks($("#component-panel"));
  }
  $$(".component-tab").forEach(tab=>tab.addEventListener("click",()=>showComponent(tab.dataset.component)));
  $(".component-menu").addEventListener("keydown",event=>{
    if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(event.key))return;
    event.preventDefault();
    const tabs=$$(".component-tab"),idx=tabs.indexOf(document.activeElement);
    const delta=["ArrowDown","ArrowRight"].includes(event.key)?1:-1;
    const next=event.key==="Home"?0:event.key==="End"?tabs.length-1:(idx+delta+tabs.length)%tabs.length;
    tabs[next].focus();showComponent(tabs[next].dataset.component);
  });
  function renderHardwareShowcase() {
    const projects = model.hardwareModels || [];
    if(!projects.length || !$("#components"))return;
    const cards=projects.map((m,i)=>'<article class="model-reference-card">'+
      '<a class="model-photo" href="'+escapeHTML(m.imageSource)+'" target="_blank" rel="noopener noreferrer" aria-label="Open original product photo of '+escapeHTML(m.name)+'">'+
      '<img src="'+escapeHTML(m.image)+'" alt="'+escapeHTML(m.alt)+'" loading="lazy" data-fallback="/assets/server-stack.svg">'+
      '<span class="model-photo-index">MODEL REFERENCE / 0'+(i+1)+'</span></a>'+
      '<div class="model-card-text"><span class="model-kicker">'+escapeHTML(m.type)+'</span><h3>'+escapeHTML(m.name)+'</h3><p class="model-number">'+escapeHTML(m.model)+'</p>'+
      '<p>'+escapeHTML(m.description)+'</p><small>'+escapeHTML(m.context)+'</small>'+
      '<div class="model-sources"><a href="'+escapeHTML(m.source)+'" target="_blank" rel="noopener noreferrer">Manufacturer specifications ↗</a>'+
      '<a href="'+escapeHTML(m.imageSource)+'" target="_blank" rel="noopener noreferrer">Image source ↗</a></div></div></article>').join("");
    const unknown=(model.hardwareUnknown||[]).map(x=>'<span title="'+escapeHTML(x.detail)+'">'+escapeHTML(x.label)+' <small>· exact model pending</small></span>').join("");
    const html='<section class="hardware-section section-wrap" id="hardware" aria-labelledby="hardware-title">'+
      '<div class="section-heading reveal"><div><p class="eyebrow">EXACT HARDWARE / VERIFIED REFERENCES</p><h2 id="hardware-title">The actual<br><em>models.</em></h2></div>'+
      '<p>Not anonymous server-room imagery. These reference photographs show the identified commercial models associated with the infrastructure work. The individual devices pictured are not the equipment installed on site.</p></div>'+
      '<div class="hardware-models">'+cards+'</div>'+
      '<div class="model-pending"><span>MODEL IDENTIFICATION IN PROGRESS</span><div>'+unknown+'</div></div></section>';
    $("#components").insertAdjacentHTML("afterend",html);
    const nav=$(".header-nav");
    if(nav){const a=document.createElement("a");a.href="#hardware";a.textContent="Real hardware";nav.insertBefore(a,nav.querySelector('a[href="#lab"]'));}
    enableImageFallbacks($("#hardware"));
  }
  function renderFieldStudies(){
    if(document.querySelector("#field-studies"))return;
    const cases=[
      ["proxmox-ha-san","Virtualization, SAN & HA","Cluster, SAN and HA testing, plus owner-confirmed completion of the backup and recovery phase."],
      ["network-diagnostics","Network diagnostics","Observe, isolate and validate a bottleneck using controlled path comparisons."],
      ["security-observability","Security observability","Wazuh, OpenSearch and Grafana — from events to meaningful operator context."]
    ];
    const items=cases.map((c,i)=>'<article class="featured-study"><a href="/cases/'+c[0]+'/"><span class="featured-study-tag">FIELD STUDY / 0'+(i+1)+'</span><span class="featured-study-art" aria-hidden="true">'+["▦","↳","◇"][i]+'</span><h3>'+c[1]+'</h3><p>'+c[2]+'</p><span class="featured-study-link">EXPLORE INTERACTIVE CASE STUDY ↗</span></a></article>').join("");
    const html='<section class="featured-studies section-wrap" id="field-studies" aria-labelledby="field-studies-title"><div class="section-heading reveal"><div><p class="eyebrow">FEATURED FIELD STUDIES / INTERACTIVE</p><h2 id="field-studies-title">Beyond the<br><em>project list.</em></h2></div><p>Explore technical architectures, practical decisions and boundaries of documented evidence. Each case study distinguishes tested work from conceptual reference diagrams.</p></div><div class="featured-studies-grid">'+items+'</div></section>';
    const lab=document.querySelector("#lab");if(lab)lab.insertAdjacentHTML("beforebegin",html);
    const nav=document.querySelector(".header-nav");if(nav){const a=document.createElement("a");a.href="#field-studies";a.textContent="Field studies";const systems=nav.querySelector('a[href="#lab"]');if(systems)nav.insertBefore(a,systems);else nav.append(a);}
  }
  function card(project, i) {
    const photo = model.images[project.visual] || model.images.circuits;
    const tags = project.tech.slice(0,3).map(t=>"<span>"+escapeHTML(t)+"</span>").join("");
    return '<article class="project-card reveal '+(i === 0 ? "wide" : "")+'" style="--delay:'+Math.min(i*42,260)+'ms">'+
       '<button type="button" class="project-click" data-project="'+escapeHTML(project.id)+'" aria-label="Open detail for '+escapeHTML(project.title)+'">'+
       '<div class="project-image"><img src="'+photo+'" alt="'+escapeHTML(project.visual==="switches"?"Physical network switches and Ethernet cabling":project.visual==="circuits"?"Macro photograph of an electronic circuit board":project.visual==="servers"?"Server rack with physical network equipment":project.visual==="camera"?"Ceiling-mounted security camera":project.visual==="scv3020"?"Dell EMC SCv3020 storage array, exact-model reference photograph":"Close-up photograph of a laptop keyboard")+'" loading="lazy" data-fallback="/assets/server-stack.svg" />'+
       '<span class="project-overlay"></span><span class="project-index">'+escapeHTML(project.id)+' / '+escapeHTML(project.year)+'</span>'+
       '<span class="project-image-symbol" aria-hidden="true">'+(project.tracks.includes("infrastructure")?"◈":project.tracks.includes("automation")?"⌘":"↗")+'</span></div>'+
       '<div class="project-content"><div class="project-topline"><span>'+escapeHTML(project.stage)+'</span><span>VIEW CASE STUDY ↗</span></div>'+
       '<h3>'+escapeHTML(project.title)+'</h3><p class="project-subtitle">'+escapeHTML(project.subtitle)+'</p>'+
       '<p class="project-description">'+escapeHTML(project.description)+'</p><div class="project-tags">'+tags+'</div></div></button></article>';
  }
  function showTrack(track, push) {
    if (!model.tracks[track]) track = "all";
    activeTrack = track;
    $$(".track-tab").forEach((button) => {
      const selected = button.dataset.track === track;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    const cfg = model.tracks[track];
    const pieces=location.pathname.split("/").filter(Boolean);
    const normalized=pieces[0]==="he"?pieces.slice(1):pieces;
    const job=(normalized[0]==="for"&&jobs[normalized[1]])?jobs[normalized[1]]:null;
    let projects=job?model.projects.filter(p=>job.ids.includes(p.id)):model.projects.filter(p=>track==="all"||p.primaryCategory===track);
    if(job)projects.sort((a,b)=>job.ids.indexOf(a.id)-job.ids.indexOf(b.id));
    else projects.sort((a,b)=>Number(Boolean(b.featured))-Number(Boolean(a.featured)));
    intro.innerHTML='<span>'+escapeHTML(job?(he?job.he:job.title):cfg.label)+'</span><p>'+escapeHTML(job?(he?job.introHe:job.intro):cfg.desc)+'</p><span class="counter">'+projects.length+' '+txt("PROJECTS","פרויקטים")+'</span>';
    if(job)intro.insertAdjacentHTML("beforeend",'<span class="tailored-note">'+txt("JOB-SPECIFIC VIEW · SHAREABLE LINK","עמוד מותאם למשרה · קישור עצמאי")+'</span>');
    cardArea.innerHTML=["infrastructure","automation","operations","leadership"].map((key,i)=>{
      const group=projects.filter(p=>p.primaryCategory===key);
      if(!group.length)return "";
      const label=model.tracks[key].label;
      return '<section class="project-category-group" data-category="'+key+'" aria-label="'+escapeHTML(label)+'"><div class="project-category-head"><span>0'+(i+1)+' / '+escapeHTML(label)+'</span><small>'+group.length+' '+txt("PROJECTS","פרויקטים")+'</small></div><div class="project-category-cards">'+group.map(card).join("")+'</div></section>';
    }).join("");
    showProfile(track);
    enableImageFallbacks(cardArea);
    if(push && location.pathname !== linkFor(track)) history.pushState({track:track},"",linkFor(track));
    document.title = he?(job?job.he+" | בר-אל לוי":(track==="all"?"בר-אל לוי | תשתיות, אוטומציה וניהול טכנולוגי":cfg.label+" | בר-אל לוי")):(job?job.title+" | Bar-El Levi":(track==="all"?"Bar-El Levi | Infrastructure, Automation & Technical Operations":cfg.label+" — Bar-El Levi | Technology Portfolio"));
    const canonicalUrl = "https://barellevi.com" + (location.pathname.endsWith("/")?location.pathname:location.pathname+"/");
    const setMeta=(selector,value)=>{const el=document.querySelector(selector);if(el)el.content=value;};
    const summary=document.querySelector('meta[name="description"]')?.content || "";
    setMeta('meta[property="og:title"]',document.title);
    setMeta('meta[property="og:description"]',summary);
    setMeta('meta[property="og:url"]',canonicalUrl);
    setMeta('meta[name="twitter:title"]',document.title);
    setMeta('meta[name="twitter:description"]',summary);
    const canonical=document.querySelector('link[rel="canonical"]');
    if(canonical) canonical.href=canonicalUrl;
    observeReveal();
  }
  function hardwareInProject(project){
    const linked=(model.hardwareModels||[]).filter(m=>m.project===project.id);
    if(!linked.length)return "";
    return '<div class="model-inline"><h3>Identified hardware models</h3>'+
      linked.map(m=>'<a href="#hardware" class="model-inline-row"><img src="'+escapeHTML(m.image)+'" alt="'+escapeHTML(m.alt)+'" data-fallback="/assets/server-stack.svg" />'+
        '<span><strong>'+escapeHTML(m.name)+'</strong><small>'+escapeHTML(m.model)+' · reference image only</small></span><span aria-hidden="true">↗</span></a>').join("")+'</div>';
  }
  function caseStudyMarkup(project){
    const c=model.caseStudies?.[project.id];
    if(!c)return '<div class="case-study-placeholder">SELECTED SYSTEMS / Additional technical material may be added over time.</div>';
    const rows=[[txt("The challenge","האתגר"),c.challenge],[txt("The approach","הגישה"),c.approach],[txt("Evidence — not independently retested","ראיות מהתיעוד"),c.evidence],[txt("Still to verify","מגבלות האימות"),c.limits]];
    return '<div class="case-study-block"><span class="case-study-eyebrow">FIELD STUDY / '+escapeHTML(c.evidenceLabel)+'</span>'+
      rows.map(([title,value])=>'<div class="case-study-row"><strong>'+escapeHTML(title)+'</strong><p>'+escapeHTML(value)+'</p></div>').join("")+'</div>';
  }
  function openProject(id) {
    const p = model.projects.find(p=>p.id===id);
    if (!p) return;
    const approvalText = txt("This study uses a generalized technical description. No organization-specific network identifiers, credentials, customer records, or production topology are included.","הפרויקט מוצג כארכיטקטורה כללית, ללא כתובות רשת, פרטי גישה או מידע לקוחות.");
    const t = p.tech.map(x=>"<span>"+escapeHTML(x)+"</span>").join("");
    $("#dialog-body").innerHTML =
      '<div class="modal-eyebrow">'+escapeHTML(p.id)+' / SELECTED WORK / '+escapeHTML(p.year)+'</div>'+
      '<h2 id="dialog-title">'+escapeHTML(p.title)+'</h2><p class="modal-subtitle">'+escapeHTML(p.subtitle)+'</p>'+
      '<div class="modal-image"><img src="'+escapeHTML(model.images[p.visual])+'" alt="Representative technology photograph, not a project image" /></div>'+
      '<h3>'+txt("Context","רקע")+'</h3><p>'+escapeHTML(p.detail)+'</p>'+caseStudyMarkup(p)+'<h3>'+txt("Contribution & scope","תחומי אחריות ותרומה")+'</h3><p>'+escapeHTML(p.role)+'</p>'+
      '<h3>'+txt("Technology","טכנולוגיות")+'</h3><div class="project-tags modal-tags">'+t+'</div>'+hardwareInProject(p)+
      ({"P11":"proxmox-ha-san","P08":"network-diagnostics","P05":"security-observability"}[p.id]?
       '<p><a class="modal-deep-link" href="'+base+'/cases/'+({"P11":"proxmox-ha-san","P08":"network-diagnostics","P05":"security-observability"}[p.id])+'/">EXPLORE INTERACTIVE FIELD STUDY ↗</a></p>':'')+
      '<div class="review-notice"><span>● ARCHITECTURAL OVERVIEW</span><p>'+escapeHTML(approvalText)+' Representative imagery is not a real project screenshot.</p></div>';
    enableImageFallbacks($("#dialog-body"));
    dialog.showModal();
    $(".modal-close",dialog).focus();
  }
  let observer;
  function observeReveal() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      $$(".reveal").forEach(el=>el.classList.add("is-visible"));return;
    }
    if (!observer) observer = new IntersectionObserver((entries)=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}
    }),{threshold:.08,rootMargin:"0px 0px -20px 0px"});
    $$(".reveal:not(.is-visible)").forEach(el=>observer.observe(el));
  }
  $$(".track-tab").forEach(btn=>btn.addEventListener("click",()=>showTrack(btn.dataset.track,true)));
  $(".track-tabs").addEventListener("keydown",e=>{
    if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;
    e.preventDefault();
    const tabs=$$(".track-tab"),idx=tabs.indexOf(document.activeElement);
    const next=e.key==="Home"?0:e.key==="End"?tabs.length-1:(idx+(e.key==="ArrowRight"?1:-1)+tabs.length)%tabs.length;
    tabs[next].focus();showTrack(tabs[next].dataset.track,true);
  });
  cardArea.addEventListener("click",e=>{
    const b=e.target.closest("[data-project]");
    if(b) openProject(b.dataset.project);
  });
  $(".modal-close").addEventListener("click",()=>dialog.close());
  dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
  const steps = [
    {phase:"01 / OBSERVE",metric:"10",unit:"Mbps",label:"Illustrative symptom",explanation:"Start with an observable symptom. Compare results across the path before changing configuration.",width:"33%",target:"diag-client"},
    {phase:"02 / ISOLATE",metric:"900",unit:"Mbps",label:"Illustrative upstream comparison",explanation:"Test the upstream path separately. A clear difference narrows the investigation to the intervening system.",width:"66%",target:"diag-gateway"},
    {phase:"03 / VALIDATE",metric:"✓",unit:"",label:"Re-test end to end",explanation:"Change one variable at a time, then repeat the same measurement. Never call a repair complete without validation.",width:"100%",target:"diag-source"}
  ];
  function step(n){
    const s=steps[n];if(!s)return;
    $("#lab-phase").textContent=s.phase;
    $("#lab-value").innerHTML=escapeHTML(s.metric)+(s.unit?' <small>'+escapeHTML(s.unit)+'</small>':'');
    $("#lab-metric-label").textContent=s.label;
    $("#lab-explanation").textContent=s.explanation;
    $("#lab-progress").style.width=s.width;
    $$(".lab-step").forEach(b=>b.classList.toggle("selected",Number(b.dataset.step)===n));
    $$(".diagram-node").forEach(node=>node.classList.toggle("active-node",node.id===s.target));
  }
  $$(".lab-step").forEach(btn=>btn.addEventListener("click",()=>step(Number(btn.dataset.step))));
  document.addEventListener("click",e=>{
    const nav=e.target.closest("a[data-nav]");
    if(!nav)return;
    if(nav.getAttribute("href")===linkFor("all")){e.preventDefault();history.pushState({track:"all"},"",linkFor("all"));showTrack("all",false);window.scrollTo({top:0,behavior:"smooth"});}
  });
  window.addEventListener("popstate",()=>showTrack(fromLocation(),false));
  const navTrack=fromLocation();showTrack(navTrack,false);step(0);showComponent("compute");renderHardwareShowcase();renderFieldStudies();observeReveal();enableImageFallbacks();
  const path=location.pathname.replace(/\/+$/,"");
  // The job-specific introduction is rendered by showTrack.
  const header=$("#site-header");let lastScrolled=-1;
  window.addEventListener("scroll",()=>{const y=scrollY;if(Math.abs(y-lastScrolled)>6){header.classList.toggle("scrolled",y>20);lastScrolled=y;}},{passive:true});
  if(matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    const visual=$(".hero-visual");
    visual.addEventListener("pointermove",e=>{
      const r=visual.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      visual.style.setProperty("--px",(x*12).toFixed(2)+"px");
      visual.style.setProperty("--py",(y*12).toFixed(2)+"px");
    });
    visual.addEventListener("pointerleave",()=>{visual.style.setProperty("--px","0px");visual.style.setProperty("--py","0px")});
  }
})();