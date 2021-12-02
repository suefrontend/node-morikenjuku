function f(input) {
  const result = input.filter((e) => e % 2 === 1);
  return result;
}
const input = [1, 2, 3, 4, 5, 6, 7];
const output = f(input);
console.log(output);

// input
// [1, 2, 3, 4, 5, 6, 7]

// output
// [1, 3, 5, 7]
