import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const ssrEntry = path.resolve(__dirname, '../dist-ssr/entry-server.js');

const { render } = await import(ssrEntry);
const appHtml = render();

const indexPath = path.join(distDir, 'index.html');
const html = readFileSync(indexPath, 'utf-8');

if (!html.includes('<div id="root"></div>')) {
    throw new Error('prerender: could not find empty #root div to inject into');
}

writeFileSync(indexPath, html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
