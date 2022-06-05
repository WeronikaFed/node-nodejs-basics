import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const writable = path.join(__dirname, "files", "fileToWrite.txt");
    const output = fs.createWriteStream(writable);
    let sumChunk = '';
    output._write = function (chunk, enc, next) {
        sumChunk += chunk;
        fs.writeFileSync(writable, sumChunk)
        next();
    };
    process.stdin.pipe(output);
};
write();