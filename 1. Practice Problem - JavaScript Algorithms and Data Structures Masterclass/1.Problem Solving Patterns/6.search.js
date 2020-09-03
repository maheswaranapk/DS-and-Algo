/**Given a sorted array of integers, write a function called search, that accepts a value
 * and returns the index where the value passed to the function is located.
 * If the value is not found, return -1
 */

const search = (arr, n) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (n > arr[middle]) {
      min = middle + 1;
    } else if (n < arr[middle]) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

console.log("Test Case 1");
console.log(search([1, 2, 3, 4, 5, 6], 4) === 3);
console.log("Test Case 2");
console.log(search([1, 2, 3, 4, 5, 6], 6) === 5);
console.log("Test Case 3");
console.log(search([1, 2, 3, 4, 5, 6], 11) === -1);