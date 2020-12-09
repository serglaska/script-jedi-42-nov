// task http://www.codewars.com/kata/57216d4bcdd71175d6000560

const padIt = (str, n) => {
  let result = str;
  while (n > 0) {
    if (n % 2 === 0) {
      result = result + '*';
      n--;
    }
    result = '*' + result;
    n--;
  };

  return result;
};

// task http://www.codewars.com/kata/5721a78c283129e416000999

const pickIt = (arr) => {
  const odd = [], even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  };

  return [odd, even];
};

// task http://www.codewars.com/kata/5721c189cdd71194c1000b9b

const grabDoll = (dolls) => {
  const bag = [];
  const kitty = 'Hello Kitty';
  const barbie = 'Barbie doll';
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i].includes(kitty)) bag.push(dolls[i]);
    if (dolls[i].includes(barbie)) bag.push(dolls[i]);
    if (bag.length === 3) break;
    continue;
  };

  return bag;
};

// task http://www.codewars.com/kata/5722b3f0bd5583cf44001000

const giveMeFive = (obj) => {
  const arrValues = [];
  for (const value in obj) {
    if (value.length === 5) arrValues.push(value);
    if (obj[value].length === 5) arrValues.push(obj[value]);
  };

  return arrValues;
};
