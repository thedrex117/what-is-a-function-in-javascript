const apmRootPath = path.join(repositoryRootPath, 'apm');
const isArray = (arr) => Array.isArray(arr);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};