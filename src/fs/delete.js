import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { unlink } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const path = __dirname + '/files/fileToRemove.txt';
  const errorMsg = 'FS operation failed';
  try {
    await unlink(path);
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await remove();
