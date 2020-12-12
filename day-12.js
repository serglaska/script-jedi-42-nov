// task https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

const areEqual = (s1, s2) => {
  if (s1.size !== s2.size) return false;
  s1.forEach((item) => {
    if (!s2.has(item)) {
      return false;
    }
  });
  return true;
};

const notEqual = (s1, s2) => !!areEqual(s1, s2);
const s1 = new Set([1, 2, 3]);
const s2 = new Set([1, 2, 5]);

console.log("🚀 ~ file: day-12.js ~ line 14 ~ notEqual", notEqual(s1, s2))

