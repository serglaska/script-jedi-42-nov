// task https://www.codewars.com/kata/basics-generators-number-1/javascript

function* generator(value) {
  let count = 1;
  while (count < Infinity) {
    value = yield value || count++;
  };
};

// https://www.codewars.com/kata/5637ead70013386e30000027/

function* generator(a) {
  let b = 1;
  const interception = a;
  while (true) {
    a = yield `${interception} x ${b} = ${interception * b}`;
    b++;
  };
};
