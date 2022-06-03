import fs from "fs";
import zlib from "zlib";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const inpPath = path.join(__dirname, "files", "fileToCompress.txt");
  const outPath = path.join(__dirname, "files", "archive.gz");
  const gzip = zlib.createGzip();
  const inp = fs.createReadStream(inpPath);
  var out = fs.createWriteStream(outPath);
  inp.pipe(gzip).pipe(out);
};
compress();
