import { getDirname } from "../utils/fileUtils.js";
import { copyFile, mkdir, readdir } from "fs/promises";

const __dirname = getDirname(import.meta.url);

const copy = async () => {
  const srcFolder = __dirname + "/files";
  const destFolder = __dirname + "/files_copy";
  const errorMsg = "FS operation failed";

  try {
    await mkdir(destFolder);
    const tmp = await readdir(srcFolder);
    await Promise.all(
      tmp.map((file) =>
        copyFile(`${srcFolder}/${file}`, `${destFolder}/${file}`)
      )
    );
  } catch (err) {
    throw new Error(errorMsg);
  }
};

await copy();
