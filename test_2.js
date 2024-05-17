// Value
const arr = [-4, 3, -9, 0, 4, 1];

const plusMinus = (s) => {
  // Find the positive value with filter array if more than 0
  // Find the negative value with filter array if less than 0
  // Find the zero value with filter array and the value same with 0
  const counts = [
    s.filter((value) => value > 0).length,
    s.filter((value) => value < 0).length,
    s.filter((value) => value == 0).length,
  ];

  for (const count of counts) {
    const ratio = (count / s.length).toFixed(6);
    console.log(ratio);
  }
};

plusMinus(arr);
