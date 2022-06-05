import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import crypto from "crypto";

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw Error("FS operation failed");
    let hash = crypto.createHash("sha256").update(data).digest("hex");
    console.log(hash);
  });
};
