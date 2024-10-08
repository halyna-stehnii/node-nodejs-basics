import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
const readStream = fs.createReadStream(filePath);

const read = async () => {
  await pipeline(readStream, process.stdout);
};

await read();
