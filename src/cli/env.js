const parseEnv = () => {
  const rssVariables = Object.keys(process.env)
    .filter((key) => key.startsWith('RSS_'))
    .map((key) => `${key}=${process.env[key]}`)
    .join('; ');

  console.log(rssVariables);
};
//RSS_name1=value1 RSS_name2=value2 node cli/env.js

parseEnv();
