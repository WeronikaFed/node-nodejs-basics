import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToRemove.txt");

  fs.unlink(filePath, (err) => {
    if (err) {
        throw Error('FS operation failed');
    }
    console.log('File was deleted')
  });
};