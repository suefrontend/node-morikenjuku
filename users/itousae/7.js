/*
input
["a", "b", "c"]

output
{sum: "abc", length: 3}
*/

const input = ["a", "b", "c"];

const f = (array) => Object.assign({}, { "sum": array.join(""), "length": array.length });

const result = f(input);
console.log(result);
