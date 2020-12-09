// task https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) {
  const sub = body.substr(body.length - (tail.length));
  return sub === tail;
};

// task https://www.codewars.com/kata/56f6ad906b88de513f000d96

const bonusTime = (salary, bonus) => bonus ? `£${salary*10}` : `£${salary}`;

// task https://www.codewars.com/kata/5a58d889880385c2f40000aa

const automorphic = (n) => String(n * n).endsWith(n) ? 'Automorphic' : 'Not!!';
