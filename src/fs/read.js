import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, "files", "fileToRead.txt");
    fs.readFile(
        filePath,
        'utf-8',
        (err, data) => {
            if (err) throw Error('FS operation failed');
            console.log(data);
        }
    );
};
read();