import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const root=process.cwd();
const mime={'.html':'text/html;charset=utf-8','.css':'text/css;charset=utf-8','.js':'application/javascript;charset=utf-8','.svg':'image/svg+xml;charset=utf-8'};
const server=createServer(async(req,res)=>{
  try{
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    let file=path.resolve(root,'.'+pathname);
    if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403);res.end();return;}
    if(pathname.endsWith('/')) file=path.join(file,'index.html');
    let bytes;try{bytes=await readFile(file);}catch{res.writeHead(404);res.end();return;}
    res.writeHead(200,{'content-type':mime[path.extname(file)]||'application/octet-stream'});res.end(bytes);
  }catch(err){res.writeHead(500);res.end(String(err));}
});
await new Promise(ok=>server.listen(4190,'127.0.0.1',ok));
await mkdir('artifacts',{recursive:true});
const browser=await chromium.launch({headless:true});
const errors=[];
try{
  const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1,reducedMotion:'reduce'});
  page.on('pageerror',err=>errors.push(err.message));
  await page.goto('http://127.0.0.1:4190/',{waitUntil:'domcontentloaded'});
  await page.locator('.project-card').first().waitFor();
  assert.equal(await page.locator('.project-card').count(),16);
  const modelCards=page.locator('.model-reference-card');
  await modelCards.first().waitFor();
  assert.equal(await modelCards.count(),2,'two identified device model references');
  assert.match(await modelCards.nth(0).innerText(),/SCv3020/);
  assert.match(await modelCards.nth(1).innerText(),/SSDSCKJB150G7/);
  await page.locator('#hardware').scrollIntoViewIfNeeded();
  await page.screenshot({path:'artifacts/08-exact-hardware-models-desktop.png',fullPage:false,animations:'disabled'});
  for(const item of await page.locator('.model-photo img').all()){
    await item.evaluate(async img=>{
      if(!img.complete) await new Promise(resolve=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});setTimeout(resolve,7000)});
    });
    console.log('Hardware image:',await item.getAttribute('alt'),'naturalWidth=',await item.evaluate(img=>img.naturalWidth),'source=',await item.getAttribute('src'));
  }

  await page.screenshot({path:'artifacts/01-public-home-desktop.png',fullPage:true,animations:'disabled'});
  await page.goto('http://127.0.0.1:4190/infrastructure/',{waitUntil:'domcontentloaded'});
  await page.locator('.project-card').first().waitFor();
  assert.match(await page.locator('#hero-title').innerText(),/resilience/i);
  await page.screenshot({path:'artifacts/02-infrastructure-path.png',fullPage:true,animations:'disabled'});
  await page.goto('http://127.0.0.1:4190/examples/network-design/',{waitUntil:'domcontentloaded'});
  await page.locator('.bp-node').first().waitFor();
  assert.equal(await page.locator('.bp-node').count(),7);
  await page.locator('[data-node="storage"]').click();
  assert.match(await page.locator('#bp-title').innerText(),/Dell EMC SCv3020/);
  assert.equal(await page.locator('#bp-model-source').isVisible(),true);
  await page.screenshot({path:'artifacts/09-scv3020-model-in-network.png',fullPage:false,animations:'disabled'});
  await page.locator('[data-node="switch"]').click();

  await page.screenshot({path:'artifacts/03-network-topology.png',fullPage:true,animations:'disabled'});
  await page.getByRole('button',{name:/Security zones/}).click();
  assert.equal(await page.locator('#bp-map').getAttribute('data-mode'),'zones');
  assert.match(await page.locator('#bp-title').innerText(),/Security gateway/);
  await page.screenshot({path:'artifacts/04-security-zones.png',fullPage:true,animations:'disabled'});
  await page.getByRole('button',{name:/Recovery path/}).click();
  assert.equal(await page.locator('#bp-map').getAttribute('data-mode'),'failover');
  assert.match(await page.locator('#bp-title').innerText(),/Compute/);
  await page.screenshot({path:'artifacts/05-recovery-simulation.png',fullPage:true,animations:'disabled'});
  const phone=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1,reducedMotion:'reduce',isMobile:true,hasTouch:true});
  phone.on('pageerror',err=>errors.push(err.message));
  await phone.goto('http://127.0.0.1:4190/',{waitUntil:'domcontentloaded'});
  await phone.locator('.project-card').first().waitFor();
  assert.equal(await phone.locator('.model-reference-card').count(),2);
  await phone.locator('#hardware').scrollIntoViewIfNeeded();
  await phone.screenshot({path:'artifacts/10-hardware-models-mobile.png',fullPage:false,animations:'disabled'});

  await phone.screenshot({path:'artifacts/06-public-home-mobile.png',fullPage:true,animations:'disabled'});
  await phone.goto('http://127.0.0.1:4190/examples/network-design/',{waitUntil:'domcontentloaded'});
  await phone.locator('.bp-node').first().waitFor();
  await phone.getByRole('button',{name:/RECOVERY/}).click();
  assert.match(await phone.locator('#bp-title').innerText(),/Recovery/);
  await phone.screenshot({path:'artifacts/07-network-mobile.png',fullPage:true,animations:'disabled'});
  const overflow=await phone.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
  assert.ok(overflow<=3,'unexpected horizontal overflow: '+overflow);
  assert.deepEqual(errors,[],'browser errors: '+errors.join(', '));
  console.log('Public Pages browser QA passed: homepage, direct role route, 7 component nodes, three architecture modes and responsive screenshots.');
}finally{await browser.close();await new Promise(ok=>server.close(ok));}