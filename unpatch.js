const timeFromDate = date => date.toTimeString().slice(0, 8);
const toggleBool = () => (bool = !bool);
const currentDate = () => new Date().toLocaleDateString('en-US');