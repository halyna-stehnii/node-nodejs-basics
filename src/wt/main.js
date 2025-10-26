import { Worker } from "worker_threads";
import { cpus } from "os";
import path from "path";
import { getDirname } from "../utils/fileUtils.js";

const __dirname = getDirname(import.meta.url);

const performCalculations = async () => {
  const numCores = cpus().length;
  const workerPath = path.join(__dirname, "worker.js");
  const workers = [];

  const workerPromises = Array.from({ length: numCores }, (_, index) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath);
      const startNumber = 10 + index;

      worker.on("message", (result) => {
        if (result && result.error) {
          resolve({ status: "error", data: null });
        } else {
          resolve({ status: "resolved", data: result });
        }
        worker.terminate();
      });

      worker.on("error", () => {
        resolve({ status: "error", data: null });
        worker.terminate();
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          resolve({ status: "error", data: null });
        }
      });

      worker.postMessage(startNumber);
      workers.push(worker);
    });
  });

  const workerResults = await Promise.all(workerPromises);

  console.log(workerResults);
};

await performCalculations();
