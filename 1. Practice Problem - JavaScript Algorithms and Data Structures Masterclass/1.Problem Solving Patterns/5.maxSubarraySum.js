/**Write a function called maxSubarraySum which accepts
 * an array of integers and a number called n. The function should calculate the
 * maximum sum of n consecutive elements in the array. */

const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;

  let maxSum = 0;
  for (let i = 0; i < n; i++) maxSum = maxSum + arr[i];
  let currentSum = maxSum;
  for (let i = 1, j = n; j < arr.length; j++, i++) {
    currentSum = currentSum - arr[i - 1] + arr[j];
    if (currentSum > maxSum) maxSum = currentSum;
  }

  return maxSum;
};

console.log("Test Case 1");
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) === 10);
console.log("Test Case 2");
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) === 17);
console.log("Test Case 3");
console.log(maxSubarraySum([4, 2, 1, 6], 1) === 6);
console.log("Test Case 4");
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4) === 13);
console.log("Test Case 5");
console.log(maxSubarraySum([], 4) === null);
