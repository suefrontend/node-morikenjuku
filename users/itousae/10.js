/*
input 
[
  { id: "a", value: 1 },
  { id: "b", value: 2 },
  { id: "c", value: 3 }
]
output
{
  ids: ["a", "b", "c"],
  entities: {
    a: { value: 1 },
    b: { value: 2 },
    c: { value: 3 }
  }
}
*/

const input = [
  { id: 'a', value: 1 },
  { id: 'b', value: 2 },
  { id: 'c', value: 3 },
];

const output = (parma) => {
  let entriesObj = {};
  return parma.reduce((obj, current) => {
    obj['ids'] = input.map((value) => value.id);
    entriesObj[current.id] = { value: current.value };
    obj['entities'] = entriesObj;
    return obj;
  }, {});
};

console.log(output(input));
