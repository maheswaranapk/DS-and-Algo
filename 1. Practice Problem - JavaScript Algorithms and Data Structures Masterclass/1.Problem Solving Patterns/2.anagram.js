/** Given two strings, write a function to determine
 * if the second string is an anagram of the first.
 *  An anagram is a word, phrase, or name formed by rearranging
 * the letters of another, such as cinema, formed from iceman. */

const validAnagram = (str1, str2) => {
  if (str1.length === 0) return true;
  if (str1.length !== str2.length) return false;

  let frequencyCounter = {};
  for (let i in str1) {
    frequencyCounter[str1[i]] = (frequencyCounter[str1[i]] || 0) + 1;
  }

  for (let i in str2) {
    if (!(str2[i] in frequencyCounter) || frequencyCounter[str2[i]] < 1)
      return false;
    else frequencyCounter[str2[i]]--;
  }

  return true;
};

console.log("Test Case 1");
console.log(validAnagram("", "") === true);
console.log("Test Case 2");
console.log(validAnagram("aaz", "zza") === false);
console.log("Test Case 3");
console.log(validAnagram("anagram", "nagaram") === true);
console.log("Test Case 4");
console.log(validAnagram("rat", "car") === false);
console.log("Test Case 5");
console.log(validAnagram("awesome", "awesom") === false);
console.log("Test Case 6");
console.log(validAnagram("qwerty", "qeywrt") === true);
console.log("Test Case 7");
console.log(validAnagram("texttwisttime", "timetwisttext") === true);
