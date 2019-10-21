import { resolve } from 'path';

export function init() {
    (global as any).baseDir = resolve(__dirname, '..');
}
