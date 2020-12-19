// task  http://www.codewars.com/kata/572fdeb4380bb703fc00002c

const isolateIt = arr => {
  const arrToSend = arr.map(el => {
    const myNewArr = [...el];
    if (el.length % 2 !== 0) myNewArr[Math.floor(el.length / 2)] = '|';
    if (el.length % 2 === 0) {
      let count = 0;
      const newArrToSend = [...Array(el.length + 1)].map((_, index) => {
        const everyItem = [...el];
        if (index === Math.floor(el.length / 2)) return (everyItem[index] = '|');
        everyItem[index] = myNewArr[count];
        count++;
        return everyItem[index];
      });
      return newArrToSend.join('');
    }
    return myNewArr.join('');
  });

  return arrToSend;
};

// task  http://www.codewars.com/kata/573023c81add650b84000429

const countGrade = scores => {
  const obj = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0,
  };

  scores.forEach((el) => {
    if (el === -1) obj.X = obj.X + 1;
    if (el === 100) obj.S = obj.S + 1;
    if (0 <= el && el < 60) obj.D = obj.D + 1;
    if (80 <= el && el < 90) obj.B = obj.B + 1;
    if (60 <= el && el < 80) obj.C = obj.C + 1;
    if (90 <= el && el < 100) obj.A = obj.A + 1;
  });

  return obj;
};

// task http://www.codewars.com/kata/57308546bd9f0987c2000d07

const mirrorImage = arr => {
  const tool = (item) => (item).toString().split('').reverse().join('');
  const arrToSend = [...arr].filter((el, indexFirst) => {
    return [...arr].some(
      (item, indexSecond) =>
        String(item) === tool(el) &&
        indexFirst === indexSecond - 1
    );
  });

  return arrToSend.length === 0 ? [-1, -1] : [arrToSend[0], Number(tool(arrToSend[0]))];
};

// http://www.codewars.com/kata/572df796914b5ba27c000c90

const sortIt = arr =>
  arr.slice().sort((a, b) => {
    let countA = arr.filter(el => el === a).length;
    let countB = arr.filter(el => el === b).length;
    if (countA === countB) {
      return b - a;
    } else if (countA > countB) {
      return 1;
    } else {
      return -1;
    }
  });
