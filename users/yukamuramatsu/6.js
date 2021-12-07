function f(input) {
  const result = input.reduce((total, val, i) => {
    total[val] = i;
    return total;
  }, {});
  return result;
}
const input = ['a', 'b', 'c'];
const output = f(input);
console.log(output);

// input
// ["a", "b", "c"]

// output
// { a: 0, b: 1, c: 2 }
