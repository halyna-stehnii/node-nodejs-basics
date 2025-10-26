import { readFile } from "fs/promises";
import { getDirname } from "../utils/fileUtils.js";

const __dirname = getDirname(import.meta.url);

const read = async () => {
  const path = __dirname + "/files/fileToRead.txt";
  const errorMsg = "FS operation failed";

  try {
    const content = await readFile(path, "utf8");
    console.log(content);
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await read();
