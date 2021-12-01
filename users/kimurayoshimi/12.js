function f(input) {
  const result = input.reduce((target, [key, value]) => {
    target[key] = value;
    return target;
  }, {});
  return result;
}

function g(input) {
  const result = Object.fromEntries(input);
  return result;
}

const input = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const output1 = f(input);
const output2 = g(input);
console.log("output1:", output1);
console.log("output2:", output2);
