const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const symbolsPath = path.join(buildOutputPath, 'symbols');