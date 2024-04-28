const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
console.log(false == '0');
console.log( "A" - "B" + "2");