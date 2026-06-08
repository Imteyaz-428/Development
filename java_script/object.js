// sigleton :- making through constructor
Object.create;

// object literals

// unique keys means by using symbol
const mykey = Symbol("thiskey")
const JSusers = {
    name : "imteyaz",
    age : 19,
    [mykey] : "mykey",
    location : "jaipur",
    email : "imtyea@4af"
}
console.log(JSusers.name); // not prefered
console.log(JSusers["name"]); // prefered

JSusers.greeting = function() { // as function value
    console.log(`hello everyone,my name is ${this.name}`); // this use to access same object property
}
console.log(JSusers.greeting());
console.log(typeof JSusers.mykey);

JSusers.email = "imteyaz@google.come"; // change value
console.log(JSusers);


/// object 2
const obj = new Object();
obj.hello = "hello everyone";
obj.name = "my name is imteyaz";
console.log(obj);
const obj1 = {};
obj1.head = "head";
obj1.tail = "tail";
console.log(obj1);

const obj2 = {obj, obj1};// first method to concat two object
console.log(obj2);
const obj3 = Object.assign({},obj,obj1);// 2nd method to concat two object
console.log(obj3);

const obj4 = {...obj, ...obj1}; // spread operator
console.log(obj3);
console.log(Object.keys(obj4));  // properties
console.log(Object.values(obj4));
console.log(Object.entries(obj4));




// object 3 :-

// destructure of object :-

const cource = {
    courseName : "java script",
    courcePrice : "999",
    courceSeller : "imteyaz"
}

console.log(cource.courseName);
const {courseName : course} = cource;
// console.log(courseName);
console.log(course);


// json 
// {
//     "name" : "imteyaz alam",
//     "cgpa" : "8.1"
// }

// json
[
    {},
    {},
    {}
    
]