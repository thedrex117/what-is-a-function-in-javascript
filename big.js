const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const resultingPromises = urls.map((url) => makHttpRequest(url));