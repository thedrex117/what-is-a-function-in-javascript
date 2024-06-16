console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const symbolsPath = path.join(buildOutputPath, 'symbols');
const buildOutputPath = path.join(repositoryRootPath, 'out');