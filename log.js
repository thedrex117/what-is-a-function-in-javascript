const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
var pattern = {};
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
console.log(typeof typeof 1);