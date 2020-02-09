console.log("Script dev loaded...");

buildCommand = 'console.log("howdy")';

async function execute(command) {
  return await exec(command, function(error, stdout, stderr) {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });
}

execute(buildCommand);
