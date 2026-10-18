/* Case studies: conceptual diagrams, not as-built corporate networks. */
(()=>{"use strict";
const m=window.CASE_MODEL;if(!m)return;
const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
const node=id=>m.nodes.find(n=>n[0]===id);
function select(id){
 const n=node(id);if(!n)return;
 $$(".case-node").forEach(b=>{const active=b.dataset.node===id;b.classList.toggle("selected",active);b.setAttribute("aria-pressed",String(active));});
 $("#case-node-title").textContent=n[1];$("#case-node-desc").textContent=n[5];
}
function mode(i){
 const x=m.views[i];if(!x)return;
 $$(".case-mode").forEach(b=>{const active=Number(b.dataset.mode)===i;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));});
 $("#case-view-count").textContent=String(i+1).padStart(2,"0");
 $("#case-view-title").textContent=x[0];$("#case-view-desc").textContent=x[1];
 $$(".case-node").forEach(b=>b.classList.toggle("highlight",x[2].includes(b.dataset.node)));
 $$(".case-map-lines path").forEach(p=>p.classList.toggle("active",x[2].includes(p.dataset.from)&&x[2].includes(p.dataset.to)));
 select(x[3]);
}
$$(".case-mode").forEach(b=>b.addEventListener("click",()=>mode(Number(b.dataset.mode))));
$$(".case-node").forEach(b=>b.addEventListener("click",()=>select(b.dataset.node)));
$$('img[src^="https://"]').forEach(img=>{const fallback=()=>{if(img.dataset.fellBack)return;img.dataset.fellBack="true";img.src=img.dataset.fallback||"/assets/server-stack.svg";img.alt="Hardware schematic fallback";};img.addEventListener("error",fallback);if(img.complete&&img.naturalWidth===0)fallback();});
mode(0);
})();
