// task https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

const areEqual = (s1, s2) => {
  if (s1.size !== s2.size) return false;
  for (const value of s1) {
    if (!s2.has(value)) {
      return false;
    }
  }
  return true;
};

const notEqual = (s1, s2) => !areEqual(s1, s2);
