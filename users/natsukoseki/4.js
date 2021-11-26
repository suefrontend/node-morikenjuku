function f(input) {
	return input % 2 === 1;
}

const array = [1, 2, 3, 4, 5, 6, 7];
const output = array.filter(f);
console.log(output);
