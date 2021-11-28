const input = (array) => {
    let resultList = array.filter((arrayItem) => {
        return arrayItem % 2 === 1;
    });
    return resultList;
};

const array = [1, 2, 3, 4, 5, 6, 7];
const output = input(array);
console.log(output);
  