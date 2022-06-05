export const parseEnv = () => {
 let res = Object.entries(process.env)
   .filter(([k, v]) => k.startsWith('RSS_'))
   .map(([k, v]) => `${k}=${v}`)
   .join('; ');
console.log(res);
};
parseEnv();