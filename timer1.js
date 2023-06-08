//alarm that beeps after a certain amount of time has passed
//takes in an input


process.argv.slice(2).forEach(function(s) {
    console.log (`Setting alarm for ${s} seconds...`)
  setTimeout(() => {
    process.stdout.write(`${s} second beep\n \x07`); 
  }, s * 1000);
});

