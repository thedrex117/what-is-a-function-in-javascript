const repositoryRootPath = path.resolve(__dirname, '..');
const appName = getAppName(channel);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));