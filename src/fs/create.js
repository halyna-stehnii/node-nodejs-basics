import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { writeFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const path = __dirname + '/files/fresh.txt';
  const errorMsg = 'FS operation failed';
  const fileContent = 'I am fresh and young';

  try {
    await writeFile(path, fileContent, { flag: 'wx' });
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await create();
