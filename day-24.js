// task http://www.codewars.com/kata/duplicate-arguments

const solution = (...rest) => !(new Set(rest).size === rest.length);

// task http://www.codewars.com/kata/last

function last(list) {
  return list.length > 1 ? list[list.length - 1] : arguments[arguments.length - 1];
};