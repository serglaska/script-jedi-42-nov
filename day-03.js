// task http://www.codewars.com/kata/571f832f07363d295d001ba8

const trueOrFalse = (val) => {
  if (val !== val) return 'false';
  switch (val) {
    case 0: return 'false';
    case '': return 'false';
    case -0: return 'false';
    case null: return 'false';
    case false: return 'false';
    case undefined: return 'false';
    default: return 'true';
  };
};

// task http://www.codewars.com/kata/57202aefe8d6c514300001fd

const saleHotdogs = (n) => {
  if (n < 5) return n * 100;
  return n >= 10 ? n * 90 : n * 95;
};

// task http://www.codewars.com/kata/572059afc2f4612825000d8a

const howManydays = (month) => {
  const short = [2];
  const normal = [4, 6, 9, 11];
  switch (true) {
    case short.includes(month): return 28;
    case normal.includes(month): return 30;
    default: return 31;
  };
};
