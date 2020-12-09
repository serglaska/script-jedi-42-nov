// task http://www.codewars.com/kata/57274562c8dcebe77e001012

const cutIt = arr => arr.map(el => el.slice(0, arr.map(el => Number(el.length)).sort((a, b) => a - b)[0]));

// task http://www.codewars.com/kata/57277a31e5e51450a4000010

const firstToLast = (str, c) => {
  const first = str.toLowerCase().indexOf(c);
  const last = str.toLowerCase().lastIndexOf(c);
  const checkTwice = str.split('').filter(el => el === c).length;
  if (first === -1) return first;
  if (checkTwice < 2) return 0;
  return last - first;
};

// task https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

const splitAndMerge = (string, separator) => string.split('').join(separator).split(separator + ' ' + separator).join(' ');
