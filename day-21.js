//  task http://www.codewars.com/kata/573d11c48b97c0ad970002d4

const regex = /https?:\/\/[\d\w.]+\.(com|net)/gi;

// task  http://www.codewars.com/kata/573e6831e3201f6a9b000971

const regex = /\b(\w)(\w)?(\w)?\w?\3\2\1\b/g;

// task http://www.codewars.com/kata/573fb9223f9793e485000453

const regex = /\d(?=(\d{3})+$)/g;
const addCommas = (money, regex) => money.replace(regex, x => x + ',');
