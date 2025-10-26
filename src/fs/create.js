import { writeFile } from "fs/promises";
import { getDirname } from "../utils/fileUtils.js";

const __dirname = getDirname(import.meta.url);

const create = async () => {
  const path = __dirname + "/files/fresh.txt";
  const errorMsg = "FS operation failed";
  const fileContent = "I am fresh and young";

  try {
    await writeFile(path, fileContent, { flag: "wx" });
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await create();
