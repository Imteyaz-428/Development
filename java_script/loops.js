let arr = [3,5,3,6,7];
// for loop
for(let i =0; i<arr.length; i++) {
    console.log(arr[i]);
}
let idx =0;
// while loop
while(idx < arr.length) {
    console.log(arr[idx]);
    idx++;
}
// do while loop;
idx =0;
do {
    console.log(arr[idx]);
    idx++
}while(idx < arr.length)


// for of loop
for(let num of arr) {
    console.log("el", num);
}

// for in loop
for(let num in arr) {
    console.log("for in :",arr[num]);

}

// for each loop
arr.forEach((num)=>(console.log("num",num)));
arr.forEach(function (num) {console.log(num)});

// object
let map = {
    "name " : "imteyaz"
}
console.log(map["name "]);


// map
let mp = new Map();
mp.set("name", "imteyaz");
mp.set("gpa", 8.01);
console.log(mp.get("gpa"));


for(let num of mp) {
    console.log(num);
}

// filter
let arr1 = arr.filter((num) => num > 2)
console.log(arr1);

// map
let arr2 = arr.map((num) => {return num + 10});
console.log(arr2);


