import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { getDirname } from "../utils/fileUtils.js";

const __dirname = getDirname(import.meta.url);

const spawnChildProcess = async (args) => {
  const scriptPath = resolve(__dirname, "files", "script.js");

  const childProcess = spawn("node", [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);

  childProcess.on("error", (error) => {
    console.error("Error spawning child process:", error);
  });
};

spawnChildProcess(["arg1", "arg2", "arg3"]);
