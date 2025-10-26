import { getDirname } from "../utils/fileUtils.js";
import { unlink } from "fs/promises";

const __dirname = getDirname(import.meta.url);

const remove = async () => {
  const path = __dirname + "/files/fileToRemove.txt";
  const errorMsg = "FS operation failed";
  try {
    await unlink(path);
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await remove();
