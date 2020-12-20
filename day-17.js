// task http://www.codewars.com/kata/5731861d05d14d6f50000626

const bigToSmall = arr => [].concat(...arr).sort((a, b) => b - a).join().replace(/,/g, '>');