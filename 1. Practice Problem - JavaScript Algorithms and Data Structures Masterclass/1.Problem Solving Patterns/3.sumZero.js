/**Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero
 * or undefined if a pair does not exist */

const sumZero = (arr) => {
  if (arr.length <= 1) return undefined;
  for (let i = 0, j = arr.length - 1; i < j; ) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else {
      if (sum > 0) j--;
      else i++;
    }
  }

  return undefined;
};

console.log("Test Case 1");
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log("Test Case 2");
console.log(sumZero([-2, 0, 1, 3]));
console.log("Test Case 3");
console.log(sumZero([1, 2, 3]));
console.log("Test Case 4");
console.log(sumZero([-2, 0, 0, 1, 3]));
console.log("Test Case 3");
console.log(sumZero([-1, 0, 1, 2, 3]));
