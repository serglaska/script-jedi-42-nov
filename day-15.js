// task http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

const shuffleIt = (arr, ...rest) => {
  const newArray = [...arr];

  rest.forEach(([firstIndex, secondIndex]) => {
    const [firstNumber, secondNumber] = [
      newArray[firstIndex],
      newArray[secondIndex]
    ];
    [newArray[firstIndex], newArray[secondIndex]] = [secondNumber, firstNumber];
  });

  return newArray;
};

// task https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/

const loopArr = (arr, direction, steps) => {
  const newArr = [...arr];

  return direction === "left"
    ? [...newArr.slice(steps), ...newArr.slice(0, steps)]
    : [...newArr.slice(-steps), ...newArr.slice(0, arr.length - steps)];
};

// task http://www.codewars.com/kata/572af273a3af3836660014a1

const infiniteLoop = (arr, direction, steps) => {
  let counter = 0;
  const lengthArrItems = arr.map(el => el.length);
  const orderNumber = [...arr.reduce((accun, el) => [...accun, ...el])];
  const leftOrder = [
    ...orderNumber.slice(steps),
    ...orderNumber.slice(0, steps)
  ];
  const rightOrder = [
    ...orderNumber.slice(-steps),
    ...orderNumber.slice(0, orderNumber.length - steps)
  ];
  const finallyArr = lengthArrItems.map(el => {
      const newItem = (direction === 'left' ? leftOrder : rightOrder).slice(counter, counter + el);
      counter = counter + el;

      return newItem;
    }
  );

  return finallyArr;
};

// task http://www.codewars.com/kata/572cb264362806af46000793

const threeInOne = arr => {
  if (arr.length === 3) return [arr.reduce((accum, el) => accum + el)];
  let counter = 0;
  const splitArr = [...Array(arr.length / 3)].map(_ => {
    const item = arr.slice(counter, counter + 3);
    counter = counter + 3;
    return item;
  });

  return splitArr.map((el) => el.reduce((accum, el) => accum + el));
};
