const fs = require('fs');
const https = require('https');
const path = require('path');

const raw = fs.readFileSync('site-content.json', 'utf8');
const regex = /https:\/\/kenahwellness\.com\/wp-content\/uploads\/[^"'\s\\]+\.(jpg|jpeg|png|svg|webp)/gi;
const matches = raw.match(regex) || [];
const unique = [...new Set(matches)];
console.log('Unique images in site-content:', unique.length);

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve({ buffer: Buffer.concat(chunks), statusCode: res.statusCode }));
    }).on('error', reject);
  });
}

async function run() {
  for (const url of unique) {
    const filename = path.basename(new URL(url).pathname);
    const dest = path.join('public/images', filename);
    if (!fs.existsSync(dest)) {
      try {
        const res = await fetch(url);
        if (res.statusCode === 200) {
          fs.writeFileSync(dest, res.buffer);
          console.log('Saved', filename);
        }
      } catch (e) {
        console.error('Err', filename, e.message);
      }
    }
  }
  console.log('Done downloading!');
}
run();
