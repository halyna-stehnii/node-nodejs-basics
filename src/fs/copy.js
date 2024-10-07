import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { copyFile, mkdir, readdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const srcFolder = __dirname + '/files';
  const destFolder = __dirname + '/files_copy';
  const errorMsg = 'FS operation failed';

  try {
    await mkdir(destFolder);
    const tmp = await readdir(srcFolder);
    await Promise.all(
      tmp.map((file) =>
        copyFile(`${srcFolder}/${file}`, `${destFolder}/${file}`)
      )
    );
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await copy();
