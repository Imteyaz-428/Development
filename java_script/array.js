// array declaration.
const a = [3,5,3, "hello"];
console.log(a);
let b = [3,9,"now"];

let number = [1,3,4,5,6,7];
let num = new Array(13,8,0,3);
console.log(number);
console.log(num);


// operation
// 1.push : add at last
num.push(9);

// pop : delete at last
num.pop();

// unshift : add at first
num.unshift(4);

// shift : delte at first
num.shift();
console.log(num);
console.log(num.includes(8)); // return true if include element other wise return false
console.log(num.indexOf(7)); // return index


const newArr = num.join();  // concate to string
console.log(newArr);

// slice and splice
// slice
console.log("A "+ number);
let sliced_num = number.slice(1,4); // ending index does not include and main array does not change
console.log(sliced_num);
console.log("B " + number);

// splice 
console.log("A ", number);
let spliced_num = number.splice(1,4); // ending index include and delete the the element of spliced elements from main array
console.log(spliced_num);
console.log("B ", number);
