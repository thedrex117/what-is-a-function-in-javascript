const isEmptyObject = obj => Object.keys(obj).length === 0;
const appName = getAppName(channel);
const currentDate = () => new Date().toLocaleDateString('en-US');