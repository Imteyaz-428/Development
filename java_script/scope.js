let a = 30; // global scope
if(true) {
    let a = 499;
    const b =3; // local scope
    var c = 8;
    console.log(a);
    console.log(b);
    console.log(c);

}
console.log(a);
// console.log(b);
console.log(c);  // block scope does not work in case of var

addOne(3)  // this works normally
function addOne(value) {
    return value + 1;
}

// addTwo(4) // this gives error because variable is defined after calling;
const addTwo = function(value) { // also called expression variable
    return  value +2;
}

