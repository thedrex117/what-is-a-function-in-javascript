const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
var DELIM_SIZE = 4;
const isEven = (num) => num % 2 === 0;