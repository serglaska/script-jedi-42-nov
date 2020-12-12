// task http://www.codewars.com/kata/5728203b7fc662a4c4000ef3

const alienLanguage = str => str
  .toUpperCase()
  .split(' ')
  .map(el => el
    .split('')
    .reverse()
    .join('')
    .replace(el[el.length - 1], el[el.length - 1].toLowerCase())
    .split('')
    .reverse()
    .join('')
  )
  .join(' ');

// task http://www.codewars.com/kata/57284d23e81185ae6200162a

const topSecret = str => str.split('').map(el => {
  if (!el.match(/[a-zA-Z]/i)) return el;
  const newChar = el.replace(el, String.fromCharCode(el.charCodeAt(0) - 3));
  switch (newChar) {
    case '>': return el.replace(el, 'X');
    case '?': return el.replace(el, 'Y');
    case '@': return el.replace(el, 'Z');
    case '^': return el.replace(el, 'x');
    case '_': return el.replace(el, 'y');
    case '`': return el.replace(el, 'z');
    default: return newChar;
  }
}).join('');

// task http://www.codewars.com/kata/5729b103dd8bac11a900119e

const fiveLine = s => {
  const clearStr = s.trim();
  const arrFiveValues = [clearStr, clearStr, clearStr, clearStr, clearStr];
  const arrWitchCorrectValues = arrFiveValues.map((el, index) => {
    return el = arrFiveValues.slice(index).join('')
  }).reverse().join(',').replace(/,/g, `\n`);

  return arrWitchCorrectValues;
};
