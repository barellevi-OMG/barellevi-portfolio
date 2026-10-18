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
