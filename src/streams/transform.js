import Transform from "stream";

export const transform = async () => {
    const removeSpaces = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().toUpperCase());
            callback();
          }
      });
      process.stdin.pipe(removeSpaces).pipe(process.stdout);
};
transform();