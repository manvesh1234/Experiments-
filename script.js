// // // // // white space
// // // // const a = "   Hello, World!   ";

// // // // console.log(a.trim());

// // // // const b = "   JavaScript   ";

// // // // console.log(b.trimStart()); 
// // // // console.log(b.trimEnd());  
// // // // console.log(b.trim());      

// // // // // spliting string
// // // // const str = "Hello World JavaScript";

// // // // console.log(str.split(" "));

// // // // const now = new Date();

// // // // console.log(now);

// // // // date time in js 

// // // //  const now = new Date();

// // // // console.log( now.getDay());
// // // // console.log("Date:", now.getDate());
// // // // console.log("Month:", now.getMonth() + 1);

// // // // const now = new Date();

// // // // console.log(now.toUTCString());

// // // // Array

// // // // let arr = [100,30,"Manvesh",true]

// // // // console.log(arr[2]);

// // // // let arr = [100,90,'Manvesh',true]

// // // // arr.push(90);
// // // // console.log(arr);

// // // let p = [10,30,50,90,11];

// // // // for(let i=0;i<p.length;i++){
// // // //     console.log(p[i])
// // // // }

// // // for (let apple of p) {
// // //     console.log(apple);
// // // }


// // // let arr = [10, 20, 30, 40, 50];

// // // arr.splice(1, 3);

// // // console.log(arr); 

// // // const arr = [10,20,30,50,90,11];

// // // console.log(arr.splice(1,3));

// // // const arr = [10, 20, 30, 50, 90, 11];

// // // let removed = arr.splice(1, 3);

// // // console.log(removed); // [20, 30, 50]
// // // console.log(arr);     // [10, 90, 11];

// // // let fruits = ["Apple", "Banana", "Orange","PineApple"];

// // // fruits.splice(1, 3, "Grapes");

// // // console.log(fruits);

// // // let arr = [10, 20, 30, 20, 40];

// // // console.log(arr.indexOf(80));

// // // const arr = [90,'Rohit','Mohit',true];

// // // arr.sort();
// // // console.log(arr);

// // // flatting array 

// // // const arr = [10,30,50,[40,90,[60,19,99],11],80];

// // // console.log(arr[3][2][1]);

// // // practice level 1 

// // //Print the first, third, and last element.
// //  let b = [10, 20, 30, 40, 50]; 
// //  console.log(b);
// //  console.log(b[0]);
// //  console.log(b[2]);              
// // console.log(b[4]); 

// // // Remove the last element and the first element.
// // // let arr = [10, 20, 30, 40, 50];
// // // arr.pop();
// // // arr.shift();
// // // console.log(arr);

// // // // Change "CSS" to "Tailwind".
// // // let a = ["HTML", "CSS", "JavaScript"];
// // // a[1] = 'tailwind';
// // // console.log(a);

// // // // Add 40 at the end and 5 at the beginning.
// // // let c = [10, 20, 30];
// // // c.unshift(5);
// // // c.push(40);
// // // console.log(c);

// // // // Print the number of elements.
// // // let d = ["Apple", "Banana", "Mango", "Orange"];
// // // console.log(d.length)
// // // console.log(d[3].length);


// // // Jogging 

// // // if....else  if....else

// // let age = 55

// // if (age >= 60) {
// //     console.log("Not Eligible");
// // } else if (age <= 30) {
// //     console.log("Eligible");
// // } else {
// //     console.log("Age is between 31 and 59 are Reserved/limited");
// //}

// let data = [
//     [
//         "India",
//         [
//             "Maharashtra",
//             ["Pune", "Nagpur", "Mumbai"],
//             [
//                 { name: "Manvesh", age: 20 },
//                 { name: "Rahul", age: 21 }
//             ]
//         ]
//     ],
//     [
//         "USA",
//         [
//             "California",
//             ["Los Angeles", "San Francisco"],
//             [
//                 { name: "John", age: 22 },
//                 { name: "Mike", age: 24 }
//             ]
//         ]
//     ]
// ];


// let result = data.flat(Infinity);
// console.log(result);

// // string access
// let a = "Mohit";
// console.log(a[3])

// // array access 
// let b = ["meta","tesla","dy Patil","Hrishikesh"];
// console.log(b[3][7][9]);

// let c = 7885.8596
// let d = 547.6151

// console.log(d)
// console.log(typeof d)

// let n = 7885.85296;


// let x = n.toFixed(3);

// console.log(x);          
// console.log(typeof x); 


// let z = 184.655
// console.log(z.toFixed(2));


// let xyz = 3553.8379
// console.log(Math.floor(xyz))

// console.log(Math.floor(Math.random()*10+1));


// console.log(Math.floor(Math.random()*5+1));

// // Template Literals 

// let interest = ["chess","Football","swimming","reading books"];


// console.log(`I am very adventurous person ${interest} and i like to do this`);

// console.log(interest.length);

// console.log(interest[5]);
// console.log(interest[3]);

// let gh = `Taj mahal is my Favuorite Location`;
// console.log(gh.toUpperCase());
// console.log(gh.toLocaleLowerCase());

//  console.log(gh.slice(4,13));
 
// // trim

// let df = `     i love reading books `;

// console.log(df.trim());
// console.log(df.trimEnd());
// console.log(df.split(","));

// var fg = "Building caffine with code";

// console.log(fg.split(" "));

// // For of loop

// let jk = ["Modi","Rahul","kejriwwal","mamta did","fadanvis"]

// for(let value of jk ){
//     console.log(value)
// }

// console.log("");

// let words = "Building caffeine with code".split(" ");

// for (let word of words) {
//     console.log(word);
// }


// let hj = ["hero","villian","legend","pro","Hacker","developer"];
 
// let l = hj.slice(3,5);
// console.log(l);

// // copying an array

// let ioo = ["book","buket","aalo","pen"];
// let newioo = [...ioo];

// console.log(newioo);

let ju = [10,30,"Mohan","Rahul"];
let ar = [50,"Pune",70,"Poster"]
let newju = [...ar,...ju]

console.log(newju);

maar = [...ju,50,"modi ji"];
console.log("maar");


// splice

let sweets = ["rasmalai","chocolate","kajukatali","rabadi"];

 sweets.splice(1,3);
 console.log(sweets)
 
sweets.splice(1,3,"banana","Apple");
console.log(sweets);

sweets.splice(1,3,"Grapes");
console.log(sweets);

