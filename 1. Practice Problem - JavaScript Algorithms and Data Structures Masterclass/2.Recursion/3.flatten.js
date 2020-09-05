const flatten = (value) => {
  let result = [];

  if (Array.isArray(value)) {
    for (i in value) {
      if (Array.isArray(value[i])) {
        result = result.concat(flatten(value[i]));
      } else result.push(flatten(value[i]));
    }
  } else {
    return value;
  }

  return result;
};

console.log(
  flatten([
    [1, 2, [3, 4, 5]],
    ["a", "b", "c"],
    [1, 2, 3],
  ])
);
