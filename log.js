const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);