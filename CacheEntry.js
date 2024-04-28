const goToTop = () => window.scrollTo(0, 0);
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
function myAPITS(someString: string, someNum: number) { ... };
console.log(1 +  +"2" + "2");