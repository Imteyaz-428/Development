let a = "3453";
console.log(a)
console.log(typeof(a))
let b = Number(a)
console.log(b);
console.log(typeof(b))
let c = Boolean(a)
console.log(c);
console.log(typeof(c))
let d = "4" + 4 + 8
let e = 3 + 3 + "8"
console.log(typeof(d))
console.log(d);
console.log(e);

let f = {
    "name" : "imteyaz alam",
    "branch" : "aiml",
    "cgpa" : 8.0
}
console.log(f)

let g = function() {
    console.log("hi");
}
g();
let sayhello = () => {
    console.log("hello");
}
sayhello();
const add = (a,b) => a + b;
console.log(add(5,3));
function adds(a,b) {
    return a+b;
}
console.log(adds(9,7));

let arr = [3,5,2,5,9,0,1];
console.log(arr[0]);
for(let i =0; i<arr.length; i++) {
    console.log(arr[i]);
}
arr.forEach(function(item) {
    console.log(item);

})