// task https://www.codewars.com/kata/how-new-works

const myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.constructor(MyObject);

// task http://www.codewars.com/kata/replicate-new

function nouveau(Constructor, ...rest) {
  const args = rest;
  const instance = {};
  instance.__proto__ = Constructor.prototype;
  const objectReturn = Constructor.call(instance, ...args);
  if (typeof objectReturn === 'function') return objectReturn;
  if (typeof objectReturn === 'object' && objectReturn !== null) {
    return objectReturn
  } else {
    return instance;
  };
};
