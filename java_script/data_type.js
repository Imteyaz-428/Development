// data types
var a = "hello world";
let b = 93;
let c ;
let d = false;
let e = null;
let g = Symbol(84);
console.table([typeof(a), typeof(b), typeof(c), typeof(d), typeof(e), typeof(g)]);

// best practice 
let name = "imteyaz alam";
let cgpa = "8.01";
console.log(`my name is : ${name}  and my gpa is : ${cgpa}`);

// looping
for(let i = 0; i<=10; i++) {
    console.log(i);
}

//function
function add(a,b) {
    return a + b;
}
console.log(add(8,7));
function greet(name) {
    console.log(`hello ${name}`);

}
greet("imteyaz");


// datatype conversion
let ab = "99";
let ba = Number(a);
console.log(typeof(ba));
let ca = parseInt(ab);
let da = parseFloat(ab);
let ea = String(ba);
console.log(ca);
console.log(da);
console.log(ea);
console.log(typeof(ca));
console.log(typeof(da));
console.log(typeof(ea));

// categorisation of data type on the basis of how the data store in memory
 
// 1. Primitive :- Number, String , boolean , undefined, Symbol, null ,bigInt

// 2. Refrence (Non primitive)
//   Array, object , Functions

// array
let arr = [8,0,3,0];
let obj = {
    "name" : "imteyaz",
    "sgpa " : 8.01
};
console.log(arr);
console.log(obj);

                                                                                                                                                                                                                                                                                         