import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const dataText=fs.readFileSync('src/data.js','utf8');
const sandbox={window:{}};
vm.runInNewContext(dataText,sandbox,{timeout:2000});
const data=sandbox.window.PORTFOLIO;
assert.equal(data.projects.length,16,'expected 16 source-review projects');
assert.equal(new Set(data.projects.map(p=>p.id)).size,16,'unique project IDs');
for(const key of ['all','infrastructure','automation','operations','leadership']) assert.ok(data.tracks[key]);
for(const p of data.projects){
  assert.ok(p.title && p.detail && p.role,'project complete: '+p.id);
  assert.ok(['employer','ownership','check'].includes(p.approval),'approval tag: '+p.id);
  assert.ok(p.tracks.length,'track tag: '+p.id);
  for(const track of p.tracks) assert.ok(data.tracks[track],track);
  assert.ok(data.images[p.visual],'photo source exists: '+p.id);
}
for(const f of ['index.html','styles.css','src/app.js','assets/mark.svg','assets/network-switch.svg','assets/server-stack.svg','assets/terminal.svg','assets/cluster.svg','assets/automation-flow.svg','_redirects','_headers']) assert.ok(fs.existsSync(f),f);
const html=fs.readFileSync('index.html','utf8');
for(const id of ['project-grid','project-dialog','lab-steps','track-intro','lab-progress']) assert.ok(html.includes('id="'+id+'"'),id);
assert.ok(html.includes('noindex'),'draft must prohibit indexing');
assert.ok(fs.readFileSync('_redirects','utf8').includes('/* /index.html 200'));
assert.ok(!html.includes('hello@barellevi.com'),'unconfigured mailbox cannot be used');
console.log('Portfolio checks passed: 16 drafts, 4 tracks, page assets, publication warning.');
