const parseArgs = () => {
  const args = process.argv.slice(2);
  //console.log(args);
  const parsedArgs = {};

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace('--', '');
    const value = args[i + 1];
    parsedArgs[propName] = value;
  }

  for (const prop in parsedArgs) {
    console.log(`${prop} is ${parsedArgs[prop]}`);
  }
};

parseArgs();
