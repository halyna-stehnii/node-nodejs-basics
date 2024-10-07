import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const path = __dirname + '/files';
  const errorMsg = 'FS operation failed';

  try {
    const allFiles = await readdir(path);
    allFiles.forEach((file) => console.log(file));
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await list();
