//take args from user and remove the first 2
var myArgs = process.argv.slice(2);

//for each time given by the user
for (let time of myArgs) {
  //trying to convert to number and if successful beeps
  if (typeof Number(time) === "number") {
    setTimeout(() => {
      //process.stdout.write('beep');
      process.stdout.write('\x07');
    }, time * 1000);
  }
}