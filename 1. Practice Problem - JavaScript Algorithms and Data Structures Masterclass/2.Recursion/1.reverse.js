const reverseString = (text) => {
  if (text.length <= 0) return "";
  else return reverseString(text.substring(1)) + text[0];
};

console.log(reverseString("abcdef"));
