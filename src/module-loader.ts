import * as path from 'path';
import * as fs from 'fs';

export class ModuleLoader {
    static load() {
        const moduleDir = path.resolve(__dirname, '..', 'modules');
        const moduleNames = fs.readdirSync(moduleDir);
        return moduleNames.map(moduleName => require(path.join(moduleDir, moduleName)).default);
    }
}
