import { readdirSync } from 'fs';
import { resolve } from 'path';

export class ProtobufLoader {
    static load(): Array<{package: string, protoPath: string}> {
        return readdirSync(__dirname).filter(filename => filename.endsWith('proto')).map(filename => {
            return {
                package: filename.split('.').shift().replace(/-/g, '_'),
                protoPath: resolve(__dirname, filename),
            };
        });
    }

}
