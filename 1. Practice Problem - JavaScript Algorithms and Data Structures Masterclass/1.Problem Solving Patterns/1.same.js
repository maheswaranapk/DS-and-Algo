/** Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has
 * it's corresponding value squared in the second array.
 * The frequency of values must be the same. */

const same = (arr1, arr2) => {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;

  let frequencyCounter1 = [];
  let frequencyCounter2 = [];

  arr1.forEach((element) => {
    frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1;
  });

  arr2.forEach((element) => {
    frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1;
  });

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }

  return true;
};

console.log("Test Case 1");
console.log(same([1, 2, 3], [4, 1, 9]) === true);
console.log("Test Case 2");
console.log(same([1, 2, 3], [1, 9]) === false);
console.log("Test Case 3");
console.log(same([1, 2, 1], [4, 4, 1]) === false);
