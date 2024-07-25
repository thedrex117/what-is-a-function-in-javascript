console.log("0 && 1 = "+(0 && 1));
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];