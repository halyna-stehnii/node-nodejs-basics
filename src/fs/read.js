import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const path = __dirname + '/files/fileToRead.txt';
  const errorMsg = 'FS operation failed';

  try {
    const content = await readFile(path, 'utf8');
    console.log(content);
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await read();
