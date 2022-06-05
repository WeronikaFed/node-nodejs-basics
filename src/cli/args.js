export const parseArgs = () => {
  const args = process.argv.slice(2);
  let res = "";
  for (let i = 0; i < args.length; i += 2) {
    if (i > 0) {
      res += ", ";
    }
    res += `${args[i].slice(2)} is ${args[i + 1]}`;
  }
  console.log(res);
};
parseArgs();
