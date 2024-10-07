import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { rename as changeName } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const properName = __dirname + '/files/properFilename.md';
  const wrongName = __dirname + '/files/wrongFilename.txt';
  const errorMsg = 'FS operation failed';

  try {
    await changeName(wrongName, properName);
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await rename();
