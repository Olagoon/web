import { execSync } from 'node:child_process';

let out;
try {
  out = execSync('git grep -l "biz-solutions" -- ":!node_modules" ":!dist" ":!src/i18n/generated"', {
    encoding: 'utf8',
  });
} catch (e) {
  out = (e.stdout || '') + '\n(exit ' + e.status + ')';
}
console.log(out.trim() || '(no matches)');
