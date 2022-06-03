import fs from "fs";
import zlib from "zlib";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const decompressedPath = path.join(__dirname, "files", "fileToCompress.txt");
  const compressedPath = path.join(__dirname, "files", "archive.gz");
//   fs.readFile(compressedPath, "utf-8", (err, data) => {
//     if (err) throw Error("FS operation failed");
//     zlib.unzip(data, (err, buffer) => {
//       console.log("\nDecompressed string in utf8 format:");
//       console.log(data.toString("utf8"));
//     });
//   });
var unzip = zlib.createUnzip();

var read = fs.createReadStream(compressedPath);
var write = fs.createWriteStream(decompressedPath);
read.pipe(unzip).pipe(write);	
console.log("unZipped Successfully");	
};
decompress();
