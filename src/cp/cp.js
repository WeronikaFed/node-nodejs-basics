import child_process from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "files", "script.js");

  fs.watch(filePath, () => {
    const ls = spawn(('node', args))
    ls.stdout.pipe(process.stdout)
    })
};
spawnChildProcess();
