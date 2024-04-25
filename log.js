const currentDate = () => new Date().toLocaleDateString('en-US');
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const randomString = () => Math.random().toString(36).slice(2);
const isEmptyArray = arr => !arr.length;
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());