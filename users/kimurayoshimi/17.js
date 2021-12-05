/*

input
{ 1: "a", 2: "b", 3: "c" }

output
[
  ['1', 'a'],
  ['2', 'b'],
  ['3', 'c']
]

*/

function f(input) {
  const result = Object.entries(input);
  return result;
}
const input = { 1: "a", 2: "b", 3: "c" };
const output = f(input);
console.log(output);
