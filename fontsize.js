const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
console.log("0 && 1 = "+(0 && 1));
const symbolsPath = path.join(buildOutputPath, 'symbols');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());