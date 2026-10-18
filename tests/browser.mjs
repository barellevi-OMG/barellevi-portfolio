import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const root=process.cwd();
const types={'.html':'text/html;charset=utf-8','.css':'text/css;charset=utf-8','.js':'text/javascript;charset=utf-8','.svg':'image/svg+xml;charset=utf-8'};
const server=createServer(async(req,res)=>{
  try{
    const urlPath=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const relative=urlPath==='/'?'index.html':urlPath.replace(/^\/+/,'');
    const full=path.resolve(root,relative);
    if(!full.startsWith(root+path.sep)&&full!==root) {res.writeHead(403);res.end();return;}
    let bytes, ext=path.extname(full);
    try {bytes=await readFile(full)} catch {
      bytes=await readFile(path.join(root,'index.html'));ext='.html';
    }
    res.writeHead(200,{'content-type':types[ext]||'application/octet-stream'});
    res.end(bytes);
  }catch(err){res.writeHead(500);res.end(String(err));}
});
await new Promise(resolve=>server.listen(4173,'127.0.0.1',resolve));
await mkdir('artifacts',{recursive:true});
const browser=await chromium.launch({headless:true});
const errors=[];
try{
  const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1,reducedMotion:'reduce'});
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:4173/',{waitUntil:'domcontentloaded'});
  await page.locator('.project-card').first().waitFor();
  assert.equal(await page.locator('.project-card').count(),16,'16 cards must render');
  assert.match(await page.locator('h1').innerText(),/complexity/i);
  await page.screenshot({path:'artifacts/desktop-home.png',fullPage:true,animations:'disabled'});
  await page.getByRole('tab',{name:/Infrastructure/}).click();
  assert.ok(page.url().endsWith('/infrastructure/'),'track changes the URL');
  const infrastructureCount=await page.locator('.project-card').count();
  assert.ok(infrastructureCount>0&&infrastructureCount<16,'filtered cards');
  await page.locator('[data-project]').first().click();
  await page.locator('#project-dialog[open]').waitFor();
  assert.ok((await page.locator('#dialog-body').innerText()).includes('EDITORIAL REVIEW'));
  await page.locator('.modal-close').click();
  await page.getByRole('button',{name:/Isolate/}).click();
  assert.match(await page.locator('#lab-phase').innerText(),/ISOLATE/);
  await page.getByRole('button',{name:/Validate/}).click();
  assert.match(await page.locator('#lab-phase').innerText(),/VALIDATE/);
  await page.goto('http://127.0.0.1:4173/for/mobileye-technical-operations/',{waitUntil:'domcontentloaded'});
  await page.locator('.project-card').first().waitFor();
  assert.ok(await page.locator('.project-card').count()>0,'direct-load career route');
  const mobile=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1,reducedMotion:'reduce',isMobile:true,hasTouch:true});
  mobile.on('pageerror',e=>errors.push(e.message));
  await mobile.goto('http://127.0.0.1:4173/',{waitUntil:'domcontentloaded'});
  await mobile.locator('.project-card').first().waitFor();
  await mobile.screenshot({path:'artifacts/mobile-home.png',fullPage:true,animations:'disabled'});
  const overflow=await mobile.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
  assert.ok(overflow<=2,'unexpected horizontal overflow '+overflow);
  assert.deepEqual(errors,[],'no JavaScript page errors');
  console.log('Browser QA passed. Desktop, mobile and deep routes captured as private workflow artifacts.');
}finally{await browser.close();await new Promise(resolve=>server.close(resolve));}