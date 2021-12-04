/*
input
"abcdefg"

output
"gfedcba"

don't use reverse method

*/

function f(input) {
  const result = [...input].reduceRight((prev, current) => prev + current);
  return result;
}
const input = "abcdefg";
const output = f(input);
console.log(output);
