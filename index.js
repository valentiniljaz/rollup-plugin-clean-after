import { promisify } from 'util';
import path from 'path';
import fs from 'fs';

const rimraf = promisify(require('rimraf'));

export const cleanAfter = ({ targets = [], silent = true } = {}) => {
    return {
        name: "cleanAfter",
        async buildEnd(_options) {
            for (const targetPath of targets) {
              const normalisedPath = path.normalize(targetPath)
              if (fs.existsSync(normalisedPath)) {
                if (!silent) {
                  console.log(`cleaning path: ${normalisedPath}`)
                }
                await rimraf(normalisedPath);
              }
            }
          }
    };
};
