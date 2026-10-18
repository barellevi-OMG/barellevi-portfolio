import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// This detects accidental secrets; it does not replace a manual privacy/IP audit.
// Loopback 127.0.0.1 is only used by local browser QA and is not a deployed address.
const scanExt = new Set(['.html','.js','.mjs','.md','.yml','.yaml','.svg','.css','.txt']);
const files=[];
function walk(dir) {
  for(const item of fs.readdirSync(dir,{withFileTypes:true})){
    if(['.git','node_modules','artifacts','_site'].includes(item.name))continue;
    const name=path.join(dir,item.name);
    if(item.isDirectory())walk(name);
    else if(scanExt.has(path.extname(name)))files.push(name);
  }
}
walk('.');
// Public infrastructure endpoint addresses are published by GitHub itself.
// Only these exact documented CDN addresses and local loopback are exempt;
// all other literal IPv4 values remain flagged for manual inspection.
const publishedPagesAddresses=new Set(['127.0.0.1','185.199.108.153','185.199.109.153','185.199.110.153','185.199.111.153']);
const checks=[
  ['IPv4 address',/(?<![\d.])(?:\d{1,3}\.){3}\d{1,3}(?![\d.])/g, x=>!publishedPagesAddresses.has(x)],
  ['MAC address',/\b(?:[a-f0-9]{2}:){5}[a-f0-9]{2}\b/gi],
  ['private key',/-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/g],
  ['access token format',/\b(?:ghp_|gho_|ghu_|ghs_|ghr_|github_pat_|xoxb-|xoxp-|AKIA[0-9A-Z]{16}|sk-[a-zA-Z0-9]{20,})[a-zA-Z0-9_-]{8,}\b/g],
  ['email address',/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,x=>!x.endsWith('@example.com')],
  ['credential assignment',/\b(?:password|passwd|api[_-]?key|access[_-]?token|private[_-]?key|client[_-]?secret)\s*[:=]\s*['"][^'"]{5,}['"]/gi]
];
const violations=[];
for(const file of files){
  const content=fs.readFileSync(file,'utf8');
  for(const [label,pattern,filter] of checks){
    pattern.lastIndex=0;
    for(const match of content.matchAll(pattern)){
      if(filter&&!filter(match[0]))continue;
      const line=content.slice(0,match.index).split('\n').length;
      violations.push({file,line,label});
    }
  }
}
if(violations.length){
  console.error('Sensitive content candidates (values withheld):');
  for(const issue of violations) console.error(issue.file+':'+issue.line+' '+issue.label);
  process.exitCode=1;
}else {
  assert.ok(files.length>10,'unexpectedly few files scanned');
  console.log('Sensitive-pattern audit passed ('+files.length+' text files).');
}
