function f(input) {
	return input.filter((e) => e % 2 === 1);
}

const array = [1, 2, 3, 4, 5, 6, 7];
const output = f(array);
console.log(output);
