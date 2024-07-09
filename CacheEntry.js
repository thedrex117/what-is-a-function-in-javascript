const minNumber = arr => Math.min(...arr);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const scriptRootPath = path.join(repositoryRootPath, 'script');