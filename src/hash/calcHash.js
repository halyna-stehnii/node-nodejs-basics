import fs from "fs";
import path from "path";
import crypto from "crypto";
import { getDirname } from "../utils/fileUtils.js";

const __dirname = getDirname(import.meta.url);
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
const fileStream = fs.createReadStream(filePath);
const hash = crypto.createHash("sha256");

const calculateHash = async () => {
  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  fileStream.on("end", () => {
    const result = hash.digest("hex");
    console.log(`SHA256 hash: ${result}`);
  });

  fileStream.on("error", (err) => {
    console.error(`Error reading file: ${err.message}`);
  });
};

await calculateHash();
