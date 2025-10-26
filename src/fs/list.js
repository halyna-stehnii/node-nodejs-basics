import { readdir } from "fs/promises";
import { getDirname } from "./fileUtils.js";

const __dirname = getDirname(import.meta.url);

const list = async () => {
  const path = __dirname + "/files";
  const errorMsg = "FS operation failed";

  try {
    const allFiles = await readdir(path);
    allFiles.forEach((file) => console.log(file));
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await list();
