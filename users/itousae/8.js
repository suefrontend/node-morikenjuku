/*
input:
["a", "b", "c"]

output:
[{0: "a"}, {1: "b"}, {2: "c"}]
*/

const input = ["a", "b", "c"];

const f = (param) => {
  return param.map((value, index) => ({ [index]: value }));
}
const output = f(input);
console.log(output);
