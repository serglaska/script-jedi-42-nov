// task http://www.codewars.com/kata/5731861d05d14d6f50000626

const bigToSmall = arr => [].concat(...arr).sort((a, b) => b - a).join().replace(/,/g, '>');

// https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript

const tailAndHead = arr => {
  const heads = arr.map(el => String(el).slice(0, 1)).slice(1, arr.length);
  const tails = arr.map(el => String(el).slice(-1)).slice(0, arr.length - 1);
  const sumTwoArray = [...Array(arr.length - 1)]
    .map((_, index) => Number(heads[index]) + Number(tails[index]))
    .reduce((accum, el) => accum * el);

  return sumTwoArray;
};

// http://www.codewars.com/kata/5732b0351eb838d03300101d

const blackAndWhite = arr => {
  if (!Array.isArray(arr)) return 'It\'s a fake array';
  if (arr.includes(5) && arr.includes(13)) return 'It\'s a black array';
  return 'It\'s a white array';
};

// https://www.codewars.com/kata/array-number-reduce/train/javascript - will be later
