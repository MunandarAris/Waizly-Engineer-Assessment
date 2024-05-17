// Value
const arr = [1, 3, 5, 7, 9];

const miniMaxSum = (s) => {
  // Calculate all value from array
  let sum = s.reduce((a, b) => {
    return a + b;
  });

  // Math.max -> for get greatest value from array
  // Math.min -> for get smallest value from array
  const min = sum - Math.max(...s);
  const max = sum - Math.min(...s);

  console.log(min, max);
};

miniMaxSum(arr);
