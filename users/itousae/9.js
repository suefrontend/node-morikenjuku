/*
input
["a", "b", "c"]

output
false
*/

const input = ['a', 'b', 'c'];
const f = (param) => {
  return param.includes('e');
};

const output = f(input);
console.log(output);
