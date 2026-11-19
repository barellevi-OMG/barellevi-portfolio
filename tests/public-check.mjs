// Content and structure checks for the public site. Run from the repository root: node tests/public-check.mjs
// The site is a bare front page plus focused sites that live in their own folders. The folders are found by their
// markup, not by name, so this file does not list them.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const read = (file) => fs.readFileSync(file, 'utf8');
const ctx = { window: {} };
vm.runInNewContext(read('src/data.js'), ctx, { timeout: 1500 });
const model = ctx.window.PORTFOLIO;
const site = read('src/site.js');

// Portfolio data: one entry per piece of work, and each entry belongs to exactly one focused site
assert.equal(new Set(model.projects.map((p) => p.id)).size, model.projects.length, 'duplicate project id');
assert.equal(new Set(model.projects.map((p) => p.slug)).size, model.projects.length, 'duplicate project slug');
for (const p of model.projects) {
  assert.ok(!JSON.stringify(p).match(/(?:password|secret|token|192\.168\.|\b10\.\d+\.)/i), 'sensitive wording in ' + p.id);
}
assert.ok(model.caseStudies.P17.evidence.includes('confirmed'), 'backup completion must stay attributed');
const variants = Object.keys(model.variants);
assert.equal(variants.length, 3, 'three focused sites');
const placed = variants.flatMap((v) => model.variants[v]);
assert.equal(new Set(placed).size, placed.length, 'a piece of work appears on more than one site');
assert.equal([...placed].sort().join(), Array.from(model.projects, (p) => p.id).sort().join(), 'every piece of work is on exactly one site');

// Locale: every project has a Hebrew translation, and each site sees only its own projects
const run = (pathname, variant, root) => {
  const sandbox = {
    window: { PORTFOLIO: structuredClone(model) }, location: { pathname },
    document: { documentElement: { dataset: { variant, root } }, body: { classList: { add() {} } } }
  };
  vm.runInNewContext(read('src/locale.js'), sandbox, { timeout: 2000 });
  return sandbox.window;
};
for (const v of variants) {
  const en = run('/x/', v, '/x'), he = run('/x/he/', v, '/x');
  assert.equal(en.SITE_LANG, 'en'); assert.equal(he.SITE_LANG, 'he');
  assert.equal(en.SITE_PREFIX, '/x'); assert.equal(he.SITE_PREFIX, '/x/he');
  assert.equal(Array.from(he.PORTFOLIO.projects, (p) => p.id).join(), Array.from(model.variants[v]).join(), 'wrong project list for ' + v);
  for (const p of he.PORTFOLIO.projects) {
    const source = model.projects.find((x) => x.id === p.id);
    assert.notEqual(p.title, source.title, 'no Hebrew title for ' + p.id);
    assert.notEqual(p.detail, source.detail, 'no Hebrew text for ' + p.id);
    assert.match(p.stage, /[֐-׿]/, 'no Hebrew stage label for ' + p.id);
    assert.equal((p.parts || []).length, (source.parts || []).length, 'Hebrew parts do not match for ' + p.id);
    assert.ok(p.primaryCategory, 'no discipline for ' + p.id);
  }
}

// Focused sites: found by their markup
const dirs = fs.readdirSync('.', { withFileTypes: true }).filter((d) => d.isDirectory() && fs.existsSync(d.name + '/index.html')).map((d) => d.name);
const sites = dirs.filter((d) => /<html[^>]* data-variant="/.test(read(d + '/index.html')));
assert.equal(sites.length, 3, 'expected three focused site folders');
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(dir + '/' + e.name) : e.name.endsWith('.html') ? [dir + '/' + e.name] : []));
const seen = new Set();
for (const dir of sites) {
  const home = read(dir + '/index.html');
  const variant = home.match(/data-variant="([a-z]+)"/)[1];
  assert.ok(model.variants[variant], 'unknown variant in ' + dir); seen.add(variant);
  assert.ok(home.includes('data-root="/' + dir + '"'), 'wrong root in ' + dir);
  assert.match(dir, /^[0-9a-f]{10}$/, 'site folder name must be an unreadable string');
  for (const prefix of ['', 'he/']) {
    for (const route of ['', 'projects/', 'resume/']) assert.ok(fs.existsSync(dir + '/' + prefix + route + 'index.html'), 'missing page ' + dir + '/' + prefix + route);
    for (const route of ['', 'projects/']) {
      const file = dir + '/' + prefix + route + 'index.html', page = read(file);
      for (const asset of ['/site.css', '/src/data.js', '/src/locale.js', '/src/site.js']) assert.ok(page.includes(asset), asset + ' not loaded by ' + file);
      assert.ok(page.includes('id="main"') && page.includes('rel="canonical"'), 'shell incomplete: ' + file);
      if (prefix) assert.match(page, /<html lang="he" dir="rtl"/, 'RTL markup missing in ' + file);
    }
    for (const id of model.variants[variant]) {
      const p = model.projects.find((x) => x.id === id), file = dir + '/' + prefix + 'project/' + p.slug + '/index.html';
      assert.ok(fs.existsSync(file), 'missing project page ' + file);
      assert.ok(read(file).includes('data-project-id="' + p.id + '"'), 'wrong project id in ' + file);
    }
    const count = fs.readdirSync(dir + '/' + prefix + 'project').length;
    assert.equal(count, model.variants[variant].length, 'extra project page in ' + dir + '/' + prefix);
  }
  // No page of one site may point at another site, and none may be indexed
  for (const file of walk(dir)) {
    const page = read(file);
    assert.ok(/name="robots" content="noindex/.test(page), 'page may be indexed: ' + file);
    for (const other of dirs) if (other !== dir && other !== 'he') assert.ok(!page.includes('/' + other + '/'), file + ' links to another site folder');
  }
}
assert.equal(seen.size, 3, 'each variant needs its own folder');
for (const id of ['work', 'career', 'about', 'people-leadership', 'stack', 'contact']) assert.ok(site.includes('id="' + id + '"'), 'homepage anchor missing: #' + id);

// Front page and publication safeguards: the front page is indexable and reveals none of the site folders
for (const file of ['index.html', 'he/index.html', '404.html', 'sitemap.xml', 'robots.txt']) {
  const text = read(file);
  for (const dir of dirs) if (dir !== 'he') assert.ok(!text.includes(dir), file + ' reveals a site folder');
}
for (const text of [read('index.html'), site]) {
  assert.ok(!text.includes('PRIVATE REVIEW BUILD') && !text.includes('PRIVATE PREVIEW'), 'preview marker left in public files');
}
assert.ok(!read('index.html').includes('noindex'), 'front page must be indexable');
assert.equal(read('CNAME').trim(), 'barellevi.com');
assert.ok(read('robots.txt').includes('Sitemap: https://barellevi.com/sitemap.xml'));
assert.equal((read('sitemap.xml').match(/<url>/g) || []).length, 2);

// Interactive case pages keep their attribution wherever they live
const cases = sites.flatMap((dir) => walk(dir)).filter((f) => f.endsWith('cases/proxmox-ha-san/index.html') && !f.includes('/he/'));
assert.equal(cases.length, 1, 'the storage case study belongs to one site');
const c11 = read(cases[0]);
assert.ok(c11.includes('BACKUP & RECOVERY — COMPLETED') && c11.includes('Owner-confirmed'), 'backup status must stay attributed');

console.log('Public content checks passed (' + model.projects.length + ' pieces of work on ' + sites.length + ' sites).');
