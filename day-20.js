// http://www.codewars.com/kata/5735e39313c205fe39001173

const countAnimals = (animals, count) => count.map(el => {
  const subCounter = animals.match(new RegExp(el, 'g'));
  if (subCounter === null) return 0;
  return subCounter.length
});

// http://www.codewars.com/kata/573975d3ac3eec695b0013e0

const findSimilarity = (str, word) => (
  str
    .split(' ')
    .filter(
      el => el === String(el.match(new RegExp(word[0] + '.*' + word[word.length - 1], 'gi'))) && el.length === word.length
    )
    .join(' ')
);

// task https://www.codewars.com/kata/573bca07dffc1aa693000139

const regex = /^[^0-8a-zA-Z].*0{4,}\b/;
