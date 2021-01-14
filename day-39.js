// task https://www.codewars.com/kata/5c743cec901022438549964a

const createIterator = array => {
  let index = 0;

  return {
    get index() { return index },
    next: () => {
      return index < array.length
        ? {

          value: array[index],
          done: index >= array.length ? ((index = array.length), true) : (index++, false),
        }
        : {
          done: true,
          value: undefined,
        };
    },
  };
};
