import { execSync } from 'node:child_process';

const NEEDLES = [
  'ai/knowledge',
  'ai/entity-graph',
  '.well-known',
  'knowledge-sitemap',
  'ai-sitemap',
  'llms-full',
  'llms.txt',
];

const CMDS = [
  'rg -l -e "ai/knowledge" -e "ai/entity-graph" -e "well-known" -e "knowledge-sitemap" -e "ai-sitemap" scripts src astro.config.ts',
  'rg -n -e "llms-full" -e "llms.txt" scripts --glob "*.ts" --glob "*.mjs"',
];

for (const cmd of CMDS) {
  console.log('=== CMD: ' + cmd.slice(0, 80) + ' ===');
  try {
    console.log(execSync(cmd, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }));
  } catch {
    console.log('(no matches or error)');
  }
}
console.log('needles unused check:', NEEDLES.length > 0 ? 'ok' : '');
