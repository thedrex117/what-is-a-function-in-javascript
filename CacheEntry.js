const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const resultingPromises = urls.map((url) => makHttpRequest(url));