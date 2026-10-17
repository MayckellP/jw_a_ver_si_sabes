import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const tasks = [
  ['node_modules/vite/bin/vite.js', 'apps/web'],
  ['node_modules/tsx/dist/cli.mjs', 'apps/server', 'watch', 'src/index.ts'],
];
const children = tasks.map(([entry, directory, ...args]) => spawn(process.execPath,
  [fileURLToPath(new URL(entry, root)), ...args], {
    cwd: fileURLToPath(new URL(directory, root)), stdio: 'inherit',
  }));
let stopping = false;
function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  children.forEach(child => child.kill());
  process.exitCode = code;
}
children.forEach(child => {
  child.on('error', error => { console.error(error); stop(1); });
  child.on('exit', code => stop(code ?? 0));
});
process.on('SIGINT', () => stop());
process.on('SIGTERM', () => stop());
