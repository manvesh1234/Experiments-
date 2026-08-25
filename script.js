// // // white space
// // const a = "   Hello, World!   ";

// // console.log(a.trim());

// // const b = "   JavaScript   ";

// // console.log(b.trimStart()); 
// // console.log(b.trimEnd());  
// // console.log(b.trim());      

// // // spliting string
// // const str = "Hello World JavaScript";

// // console.log(str.split(" "));

// // const now = new Date();

// // console.log(now);

// // date time in js 

// //  const now = new Date();

// // console.log( now.getDay());
// // console.log("Date:", now.getDate());
// // console.log("Month:", now.getMonth() + 1);

// // const now = new Date();

// // console.log(now.toUTCString());

// // Array

// // let arr = [100,30,"Manvesh",true]

// // console.log(arr[2]);

// // let arr = [100,90,'Manvesh',true]

// // arr.push(90);
// // console.log(arr);

// let p = [10,30,50,90,11];

// // for(let i=0;i<p.length;i++){
// //     console.log(p[i])
// // }

// for (let apple of p) {
//     console.log(apple);
// }


// let arr = [10, 20, 30, 40, 50];

// arr.splice(1, 3);

// console.log(arr); 

// const arr = [10,20,30,50,90,11];

// console.log(arr.splice(1,3));

// const arr = [10, 20, 30, 50, 90, 11];

// let removed = arr.splice(1, 3);

// console.log(removed); // [20, 30, 50]
// console.log(arr);     // [10, 90, 11];

// let fruits = ["Apple", "Banana", "Orange","PineApple"];

// fruits.splice(1, 3, "Grapes");

// console.log(fruits);

// let arr = [10, 20, 30, 20, 40];

// console.log(arr.indexOf(80));

const arr = [90,'Rohit','Mohit',true];

arr.sort();
console.log(arr);