const isPalindrome = (text) => {
  if (text.length <= 1) return true;
  if (text[0] === text[text.length - 1])
    return isPalindrome(text.substring(1, text.length - 1));

  return false;
};

console.log(isPalindrome("anna"));
console.log(isPalindrome("abcddcba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("asdsadsadsa"));
