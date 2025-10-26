import { getDirname } from "../utils/fileUtils.js";
import { rename as changeName } from "fs/promises";

const __dirname = getDirname(import.meta.url);

const rename = async () => {
  const properName = __dirname + "/files/properFilename.md";
  const wrongName = __dirname + "/files/wrongFilename.txt";
  const errorMsg = "FS operation failed";

  try {
    await changeName(wrongName, properName);
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await rename();
