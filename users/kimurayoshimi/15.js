/*
Create countDown function.
Don't write
function a(){
  count(3)
  count(2)
  count(1)
  count(0)
}

input
3

output
3
2
1
0
*/

function f(input) {
  let count = input;
  while (count > 0) {
    console.log(count);
    count--;
  }
  return count;
}
const input = 3;
const output = f(input);
console.log(output);
