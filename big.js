console.log(false == '0');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);