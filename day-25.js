// task http://www.codewars.com/kata/write-javascripts-call-function-using-apply

Function.prototype.call = function (value, ...args) {
  return this.apply(value, args)
};

// task 

name = 'The Window';

const alpha = {
  name: 'My Alpha',
  getNameFunc: () => () => alpha.name,
};
