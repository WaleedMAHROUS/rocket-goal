// Vercel build: copy the game files into dist/. When this repo is the deployment source the files are right here;
// otherwise (a deployment made from just this script) they are downloaded from GitHub at a pinned commit.
import { mkdir, writeFile, readFile, access } from 'node:fs/promises';
const FILES = ['index.html', 'sw.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'adhan.mp3'];
const REF = process.env.ROCKET_GOAL_REF || 'main';
const BASE = `https://raw.githubusercontent.com/WaleedMAHROUS/rocket-goal/${REF}/`;
const here = f => access(f).then(() => true, () => false);
await mkdir('dist', { recursive: true });
for (const f of FILES) {
  let buf;
  if (await here(f)) buf = await readFile(f);
  else {
    const res = await fetch(BASE + f);
    if (!res.ok) throw new Error(`Download failed for ${f}: HTTP ${res.status}`);
    buf = Buffer.from(await res.arrayBuffer());
  }
  await writeFile('dist/' + f, buf);
  console.log(`${f}  ${buf.length} bytes`);
}
