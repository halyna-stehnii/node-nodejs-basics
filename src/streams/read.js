import fs from "fs";
import path from "path";
import { getDirname } from "../utils/fileUtils.js";

const __dirname = getDirname(import.meta.url);
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const readStream = fs.createReadStream(filePath, "utf8");
  readStream.pipe(process.stdout);
};

await read();
