// task http://www.codewars.com/kata/5722fd3ab7162a3a4500031f

const whatNumberIsIt = (n) => {
  switch (n) {
    case Infinity: return 'Input number is Number.POSITIVE_INFINITY';
    case Number.MIN_VALUE: return 'Input number is Number.MIN_VALUE';
    case Number.MAX_VALUE: return 'Input number is Number.MAX_VALUE';
    case Number.NEGATIVE_INFINITY: return 'Input number is Number.NEGATIVE_INFINITY';
    default: return !!n ? `Input number is ${n}`: 'Input number is Number.NaN';
  };
};

// task https://www.codewars.com/kata/57238ceaef9008adc7000603

const colorOf = (...rgb) => {
  const newArr = rgb.map(el => {
    let convertTo16system = el.toString(16);
    return convertTo16system.length === 1 ? '0' + convertTo16system : convertTo16system;
  });
  
  return `#${newArr.join('')}`;
};

// http://www.codewars.com/kata/57256064856584bc47000611

const howManySmaller = (arr,n) => arr.filter(el => +el.toFixed(2) < n).length;
