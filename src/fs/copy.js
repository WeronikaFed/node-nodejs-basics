import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const from = path.join(__dirname, "files");
  const to = path.join(__dirname, "files_copy");
  if (!fs.existsSync(to)) {
    fs.mkdir(to, { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.readdirSync(from).forEach((element) => {
      if (fs.lstatSync(path.join(from, element)).isFile()) {
        fs.copyFileSync(path.join(from, element), path.join(to, element));
      } else {
        copyFolderSync(path.join(from, element), path.join(to, element));
      }
    });
  } else {
    throw Error("FS operation failed");
  }
};
copy();
