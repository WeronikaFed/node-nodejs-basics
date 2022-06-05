import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "files");
  fs.readdir(filePath, (err, files) => {
    if (files !== undefined) {
      files.forEach((file) => {
        console.log(file);
      });
    } else {
      throw Error("FS operation failed");
    }
  });
};
list();