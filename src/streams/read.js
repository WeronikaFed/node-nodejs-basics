import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  const stream = fs.createReadStream(filePath, "utf-8");
  stream.pipe(process.stdout);
  stream.on("error", (error) => console.log("Error", error.message));
};