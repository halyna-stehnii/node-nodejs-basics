import fs from "fs";
import path from "path";
import zlib from "zlib";
import { pipeline } from "stream/promises";
import { getDirname } from "../utils/fileUtils.js";

const __dirname = getDirname(import.meta.url);
const inputFilePath = path.join(__dirname, "files", "archive.gz");
const outputFilePath = path.join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const sourceStream = fs.createReadStream(inputFilePath);
  const destinationStream = fs.createWriteStream(outputFilePath);

  await pipeline(sourceStream, gunzip, destinationStream);
};

await decompress();
