import assert from 'node:assert/strict';import fs from 'node:fs';import vm from 'node:vm';
const html=fs.readFileSync('index.html','utf8'),js=fs.readFileSync('src/app.js','utf8');
const ctx={window:{}};vm.runInNewContext(fs.readFileSync('src/data.js','utf8'),ctx,{timeout:1500});
const m=ctx.window.PORTFOLIO;
assert.equal(m.projects.length,16);
assert.equal(m.components.length,4);
assert.equal(m.hardwareModels.length,2,'two source-identified physical models');
assert.equal(m.hardwareModels[0].model,'SCv3020');
assert.ok(m.hardwareModels[1].model.includes('SSDSCKJB150G7'));
assert.equal(m.projects.find(p=>p.id==='P11').visual,'scv3020','P11 should use real model reference');
for(const hw of m.hardwareModels){
  assert.ok(hw.image.startsWith('https://')&&hw.imageSource.startsWith('https://'),'image source missing');
  assert.ok(hw.source.startsWith('https://') && hw.context.toLowerCase().includes('not'),'must explicitly mark reference photograph, not actual site equipment');
}
assert.ok(js.includes('renderHardwareShowcase'),'physical hardware gallery missing');
assert.ok(js.includes('data-fallback'),'remote photo failure fallback missing');
assert.ok(js.includes("$$('img[src^="),'remote image listeners must use querySelectorAll');
assert.ok(fs.readFileSync('examples/network-design/index.html','utf8').includes('Dell EMC SCv3020'),'diagram storage model missing');

assert.ok(fs.existsSync('examples/network-design/index.html'));
assert.ok(html.includes('Network blueprint'));
assert.ok(!html.includes('PRIVATE REVIEW BUILD'));
assert.ok(!html.includes('noindex'));
assert.equal(fs.readFileSync('CNAME','utf8').trim(),'barellevi.com');
assert.ok(!js.includes('Employer publication approval required'));
for(const path of ['infrastructure','automation','operations','leadership','for/mobileye-infrastructure','for/mobileye-technical-operations']) assert.ok(fs.existsSync(path+'/index.html'),path);
for(const p of m.projects) assert.ok(!JSON.stringify(p).match(/(?:password|secret|token|192\\.168\\.|10\\.70\\.)/i),'sensitive identifier in '+p.id);
console.log('Public release checks passed: 16 generalized projects, route files, network demo and release safeguards.');

const seoRoutes={
'index.html':'https://barellevi.com/',
'infrastructure/index.html':'https://barellevi.com/infrastructure/',
'automation/index.html':'https://barellevi.com/automation/',
'operations/index.html':'https://barellevi.com/operations/',
'leadership/index.html':'https://barellevi.com/leadership/',
'examples/network-design/index.html':'https://barellevi.com/examples/network-design/'
};
for(const [path,canonical] of Object.entries(seoRoutes)){
 const content=fs.readFileSync(path,'utf8');
 assert.ok(content.includes('rel="canonical" href="'+canonical+'"'),"missing canonical: "+path);
 assert.ok(content.includes('property="og:title"'),"missing open graph: "+path);
 assert.ok(content.includes('property="og:description"'),"missing social summary: "+path);
}
for(const name of ['mobileye-infrastructure','mobileye-technical-operations','technical-operations','automation-engineering','technical-leadership']){
 const content=fs.readFileSync('for/'+name+'/index.html','utf8');
 assert.ok(content.includes('content="noindex,follow"'),"tailored URL indexed accidentally: "+name);
}
assert.ok(!js.includes('PRIVATE PREVIEW'),'public frontend cannot retain preview badge');
assert.ok(!js.includes('CASE STUDIES IN REVIEW'),'public copy should say projects');
assert.ok(fs.readFileSync('robots.txt','utf8').includes('Sitemap: https://barellevi.com/sitemap.xml'));
assert.equal((fs.readFileSync('sitemap.xml','utf8').match(/<url>/g)||[]).length,6);

for(const slug of ["proxmox-ha-san","network-diagnostics","security-observability"]){
  const p="cases/"+slug+"/index.html";
  assert.ok(fs.existsSync(p),"missing detailed project page "+p);
  const page=fs.readFileSync(p,"utf8");
  assert.ok(page.includes("window.CASE_MODEL="),"missing interactive model on "+slug);
  assert.ok(page.includes('class="case-node"'),"no architecture nodes on "+slug);
  assert.ok(page.includes('rel="canonical"'),"no canonical URL on "+slug);
  assert.ok(fs.readFileSync("sitemap.xml","utf8").includes("/cases/"+slug+"/"));
}
assert.ok(js.includes("renderFieldStudies();"),"home and career deep dives missing");
assert.ok(js.includes("EXPLORE INTERACTIVE FIELD STUDY"),"project dialog has no deep dive CTA");
assert.ok(fs.existsSync("case-studies.js")&&fs.existsSync("case-studies.css"),"case styles/interactions missing");
