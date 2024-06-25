const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
var DELIM_SIZE = 4;