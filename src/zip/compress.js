import { createGzip } from "zlib";
import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { getDirname } from "../utils/fileUtils.js";

const __dirname = getDirname(import.meta.url);
const sourceFilePath = path.join(__dirname, "files", "fileToCompress.txt");
const destinationFilePath = path.join(
  __dirname,
  "files",
  "fileToCompress.txt.gz"
);

const compress = async () => {
  const gzip = createGzip();
  const sourceStream = fs.createReadStream(sourceFilePath);
  const destinationStream = fs.createWriteStream(destinationFilePath);

  await pipeline(sourceStream, gzip, destinationStream);
};

await compress();
