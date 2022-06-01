import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
export const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  fs.rename(
    path.join(__dirname, "files", "wrongFilename.txt"),
    path.join(__dirname, "files", "properFilename.md"),
    (err) => {
      if (err) throw Error("FS operation failed");
      console.log("File renamed successfully");
    }
  );
};
