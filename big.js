const randomBoolean = () => Math.random() >= 0.5;
var pattern = {};
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());