import fs from "fs";
import path from "path";
import { getDirname } from "../utils/fileUtils.js";

const __dirname = getDirname(import.meta.url);
const filePath = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writeStream = fs.createWriteStream(filePath);
  process.stdin.pipe(writeStream);
};

await write();
