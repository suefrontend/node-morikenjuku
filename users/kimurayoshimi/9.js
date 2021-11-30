const a = (b) => b.includes("e");
const b = a(["a", "b", "c", "e"]);
console.log(b);

const c = (d) => d.some((value) => value === "e");
const d = c(["a", "b", "c", "e"]);
console.log(d);

const e = (f) => f.find((value) => value === "e");
const f = e(["a", "b", "c", "e"]);
console.log(f);
