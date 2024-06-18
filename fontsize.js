const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const repositoryRootPath = path.resolve(__dirname, '..');
const removeDuplicates = (arr) => [...new Set(arr)];