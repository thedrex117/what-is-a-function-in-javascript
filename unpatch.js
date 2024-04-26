const fullName = name || 'buddy';
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const added = [0, 1, 2, 3, 4].map((item) => item + 1);