const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");