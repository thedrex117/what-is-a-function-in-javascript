const uniqueArray = arr => [...new Set(arr)];
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;