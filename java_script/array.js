const a = [3,5,3, "hello"];
console.log(a);
let b = [3,9,"now"];
let c = new [... a, ... b];
console.log(c);