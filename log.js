var DELIM_SIZE = 4;
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);