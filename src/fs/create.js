import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "files", "fresh.txt")
  if (fs.existsSync(filePath)) {
      throw Error('FS operation failed');
  }
  fs.writeFile(
    filePath,
    "I am fresh and young",
    (err) => {
      if (err) {
        console.log("FS operation failed due to: ", err);
      } else {
          console.log("Operation succeeded!")
      }
    }
  );
};
