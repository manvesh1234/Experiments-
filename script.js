// // white space
// // // // // // // // // // // // // // const a = "   Hello, World!   ";

// // // // // // // // // // // // // // console.log(a.trim());

// // // // // // // // // // // // // // const b = "   JavaScript   ";

// // // // // // // // // // // // // // console.log(b.trimStart()); 
// // // // // // // // // // // // // // console.log(b.trimEnd());  
// // // // // // // // // // // // // // console.log(b.trim());      

// // // // // // // // // // // // // // // spliting string
// // // // // // // // // // // // // // const str = "Hello World JavaScript";

// // // // // // // // // // // // // // console.log(str.split(" "));

// // // // // // // // // // // // // // const now = new Date();

// // // // // // // // // // // // // // console.log(now);

// // // // // // // // // // // // // // date time in js 

// // // // // // // // // // // // // //  const now = new Date();

// // // // // // // // // // // // // // console.log( now.getDay());
// // // // // // // // // // // // // // console.log("Date:", now.getDate());
// // // // // // // // // // // // // // console.log("Month:", now.getMonth() + 1);

// // // // // // // // // // // // // // const now = new Date();

// // // // // // // // // // // // // // console.log(now.toUTCString());

// // // // // // // // // // // // // // Array

// // // // // // // // // // // // // // let arr = [100,30,"Manvesh",true]

// // // // // // // // // // // // // // console.log(arr[2]);

// // // // // // // // // // // // // // let arr = [100,90,'Manvesh',true]

// // // // // // // // // // // // // // arr.push(90);
// // // // // // // // // // // // // // console.log(arr);

// // // // // // // // // // // // // let p = [10,30,50,90,11];

// // // // // // // // // // // // // // for(let i=0;i<p.length;i++){
// // // // // // // // // // // // // //     console.log(p[i])
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // for (let apple of p) {
// // // // // // // // // // // // //     console.log(apple);
// // // // // // // // // // // // // }


// // // // // // // // // // // // // let arr = [10, 20, 30, 40, 50];

// // // // // // // // // // // // // arr.splice(1, 3);

// // // // // // // // // // // // // console.log(arr); 

// // // // // // // // // // // // // const arr = [10,20,30,50,90,11];

// // // // // // // // // // // // // console.log(arr.splice(1,3));

// // // // // // // // // // // // // const arr = [10, 20, 30, 50, 90, 11];

// // // // // // // // // // // // // let removed = arr.splice(1, 3);

// // // // // // // // // // // // // console.log(removed); // [20, 30, 50]
// // // // // // // // // // // // // console.log(arr);     // [10, 90, 11];

// // // // // // // // // // // // // let fruits = ["Apple", "Banana", "Orange","PineApple"];

// // // // // // // // // // // // // fruits.splice(1, 3, "Grapes");

// // // // // // // // // // // // // console.log(fruits);

// // // // // // // // // // // // // let arr = [10, 20, 30, 20, 40];

// // // // // // // // // // // // // console.log(arr.indexOf(80));

// // // // // // // // // // // // // const arr = [90,'Rohit','Mohit',true];

// // // // // // // // // // // // // arr.sort();
// // // // // // // // // // // // // console.log(arr);

// // // // // // // // // // // // // flatting array 

// // // // // // // // // // // // // const arr = [10,30,50,[40,90,[60,19,99],11],80];

// // // // // // // // // // // // // console.log(arr[3][2][1]);

// // // // // // // // // // // // // practice level 1 

// // // // // // // // // // // // //Print the first, third, and last element.
// // // // // // // // // // // //  let b = [10, 20, 30, 40, 50]; 
// // // // // // // // // // // //  console.log(b);
// // // // // // // // // // // //  console.log(b[0]);
// // // // // // // // // // // //  console.log(b[2]);              
// // // // // // // // // // // // console.log(b[4]); 

// // // // // // // // // // // // // Remove the last element and the first element.
// // // // // // // // // // // // // let arr = [10, 20, 30, 40, 50];
// // // // // // // // // // // // // arr.pop();
// // // // // // // // // // // // // arr.shift();
// // // // // // // // // // // // // console.log(arr);

// // // // // // // // // // // // // // Change "CSS" to "Tailwind".
// // // // // // // // // // // // // let a = ["HTML", "CSS", "JavaScript"];
// // // // // // // // // // // // // a[1] = 'tailwind';
// // // // // // // // // // // // // console.log(a);

// // // // // // // // // // // // // // Add 40 at the end and 5 at the beginning.
// // // // // // // // // // // // // let c = [10, 20, 30];
// // // // // // // // // // // // // c.unshift(5);
// // // // // // // // // // // // // c.push(40);
// // // // // // // // // // // // // console.log(c);

// // // // // // // // // // // // // // Print the number of elements.
// // // // // // // // // // // // // let d = ["Apple", "Banana", "Mango", "Orange"];
// // // // // // // // // // // // // console.log(d.length)
// // // // // // // // // // // // // console.log(d[3].length);


// // // // // // // // // // // // // Jogging 

// // // // // // // // // // // // // if....else  if....else

// // // // // // // // // // // // let age = 55

// // // // // // // // // // // // if (age >= 60) {
// // // // // // // // // // // //     console.log("Not Eligible");
// // // // // // // // // // // // } else if (age <= 30) {
// // // // // // // // // // // //     console.log("Eligible");
// // // // // // // // // // // // } else {
// // // // // // // // // // // //     console.log("Age is between 31 and 59 are Reserved/limited");
// // // // // // // // // // // //}

// // // // // // // // // // // let data = [
// // // // // // // // // // //     [
// // // // // // // // // // //         "India",
// // // // // // // // // // //         [
// // // // // // // // // // //             "Maharashtra",
// // // // // // // // // // //             ["Pune", "Nagpur", "Mumbai"],
// // // // // // // // // // //             [
// // // // // // // // // // //                 { name: "Manvesh", age: 20 },
// // // // // // // // // // //                 { name: "Rahul", age: 21 }
// // // // // // // // // // //             ]
// // // // // // // // // // //         ]
// // // // // // // // // // //     ],
// // // // // // // // // // //     [
// // // // // // // // // // //         "USA",
// // // // // // // // // // //         [
// // // // // // // // // // //             "California",
// // // // // // // // // // //             ["Los Angeles", "San Francisco"],
// // // // // // // // // // //             [
// // // // // // // // // // //                 { name: "John", age: 22 },
// // // // // // // // // // //                 { name: "Mike", age: 24 }
// // // // // // // // // // //             ]
// // // // // // // // // // //         ]
// // // // // // // // // // //     ]
// // // // // // // // // // // ];


// // // // // // // // // // // let result = data.flat(Infinity);
// // // // // // // // // // // console.log(result);

// // // // // // // // // // // // string access
// // // // // // // // // // // let a = "Mohit";
// // // // // // // // // // // console.log(a[3])

// // // // // // // // // // // // array access 
// // // // // // // // // // // let b = ["meta","tesla","dy Patil","Hrishikesh"];
// // // // // // // // // // // console.log(b[3][7][9]);

// // // // // // // // // // // let c = 7885.8596
// // // // // // // // // // // let d = 547.6151

// // // // // // // // // // // console.log(d)
// // // // // // // // // // // console.log(typeof d)

// // // // // // // // // // // let n = 7885.85296;


// // // // // // // // // // // let x = n.toFixed(3);

// // // // // // // // // // // console.log(x);          
// // // // // // // // // // // console.log(typeof x); 


// // // // // // // // // // // let z = 184.655
// // // // // // // // // // // console.log(z.toFixed(2));


// // // // // // // // // // // let xyz = 3553.8379
// // // // // // // // // // // console.log(Math.floor(xyz))

// // // // // // // // // // // console.log(Math.floor(Math.random()*10+1));


// // // // // // // // // // // console.log(Math.floor(Math.random()*5+1));

// // // // // // // // // // // // Template Literals 

// // // // // // // // // // // let interest = ["chess","Football","swimming","reading books"];


// // // // // // // // // // // console.log(`I am very adventurous person ${interest} and i like to do this`);

// // // // // // // // // // // console.log(interest.length);

// // // // // // // // // // // console.log(interest[5]);
// // // // // // // // // // // console.log(interest[3]);

// // // // // // // // // // // let gh = `Taj mahal is my Favuorite Location`;
// // // // // // // // // // // console.log(gh.toUpperCase());
// // // // // // // // // // // console.log(gh.toLocaleLowerCase());

// // // // // // // // // // //  console.log(gh.slice(4,13));
 
// // // // // // // // // // // // trim

// // // // // // // // // // // let df = `     i love reading books `;

// // // // // // // // // // // console.log(df.trim());
// // // // // // // // // // // console.log(df.trimEnd());
// // // // // // // // // // // console.log(df.split(","));

// // // // // // // // // // // var fg = "Building caffine with code";

// // // // // // // // // // // console.log(fg.split(" "));

// // // // // // // // // // // // For of loop

// // // // // // // // // // // let jk = ["Modi","Rahul","kejriwwal","mamta did","fadanvis"]

// // // // // // // // // // // for(let value of jk ){
// // // // // // // // // // //     console.log(value)
// // // // // // // // // // // }

// // // // // // // // // // // console.log("");

// // // // // // // // // // // let words = "Building caffeine with code".split(" ");

// // // // // // // // // // // for (let word of words) {
// // // // // // // // // // //     console.log(word);
// // // // // // // // // // // }


// // // // // // // // // // // let hj = ["hero","villian","legend","pro","Hacker","developer"];
 
// // // // // // // // // // // let l = hj.slice(3,5);
// // // // // // // // // // // console.log(l);

// // // // // // // // // // // // copying an array

// // // // // // // // // // // let ioo = ["book","buket","aalo","pen"];
// // // // // // // // // // // let newioo = [...ioo];

// // // // // // // // // // // console.log(newioo);

// // // // // // // // // // // let ju = [10,30,"Mohan","Rahul"];
// // // // // // // // // // // let ar = [50,"Pune",70,"Poster"]
// // // // // // // // // // // let newju = [...ar,...ju]

// // // // // // // // // // // console.log(newju);

// // // // // // // // // // // maar = [...ju,50,"modi ji"];
// // // // // // // // // // // console.log("maar");


// // // // // // // // // // // // splice

// // // // // // // // // // // let sweets = ["rasmalai","chocolate","kajukatali","rabadi"];

// // // // // // // // // // //  sweets.splice(1,3);
// // // // // // // // // // //  console.log(sweets)
 
// // // // // // // // // // // sweets.splice(1,3,"banana","Apple");
// // // // // // // // // // // console.log(sweets);

// // // // // // // // // // // sweets.splice(1,3,"Grapes");
// // // // // // // // // // // console.log(sweets);

// // // // // // // // // // // OBJECTS

// // // // // // // // // // // const car = {
// // // // // // // // // // //   brand: "Toyota",
// // // // // // // // // // //   model: "Corolla",
// // // // // // // // // // //   year: 2025
// // // // // // // // // // // };


// // // // // // // // // // // const fruits = ["Apple", "Banana", "Mango"];

// // // // // // // // // // // const first = fruits[0];
// // // // // // // // // // // const second = fruits[1];
// // // // // // // // // // // const third = fruits[2];

// // // // // // // // // // // console.log(first,second,third);  

// // // // // // // // // // // console.log("Hello World");

// // // // // // // // // // // function addNumber(...num){

// // // // // // // // // // //     let sum =0;

// // // // // // // // // // //     for(let n of num){
// // // // // // // // // // //         sum+=n;
// // // // // // // // // // //     }

// // // // // // // // // // //     console.log(sum);

// // // // // // // // // // // }

// // // // // // // // // // // addNumber(6,7);
// // // // // // // // // // // addNumber(5,6,7);
// // // // // // // // // // // addNumber(8,79,56,9);
// // // // // // // // // // // addNumber(34,5,67,89);

// // // // // // // // // // // Functions in js 

// // // // // // // // // // // function Hero () {
// // // // // // // // // // //     console.log("hello Manvesh")
// // // // // // // // // // // }

// // // // // // // // // // // Hero();

// // // // // // // // // // // function add (num1,num2) {
// // // // // // // // // // //     let into = num1*num2
// // // // // // // // // // //     console.log(into)
// // // // // // // // // // // }

// // // // // // // // // // // add(5,5);

// // // // // // // // // // // // funtion fox () {}

// // // // // // // // // // // function add() {
// // // // // // // // // // //     console.log(10 + 20);
// // // // // // // // // // // }

// // // // // // // // // // // add(); 

// // // // // // // // // // // const abc = () => {
// // // // // // // // // // //     let a = 3;
// // // // // // // // // // //     let b = 2;
// // // // // // // // // // //     return a + b;
// // // // // // // // // // // }

// // // // // // // // // // // abc();

// // // // // // // // // // // console.log(abc());

// // // // // // // // // // // Level 1 

// // // // // // // // // // // Q1. Create a function called hello that prints "Hello".

// // // // // // // // // // // Q2. Create a function called welcome that prints "Welcome to JavaScript".

// // // // // // // // // // // Q3. Create a function called sum that prints 10 + 20.

// // // // // // // // // // // Q4. Create a function called bye that prints "Good Bye".


// // // // // // // // // // // function addNumber (num1,num2)
// // // // // // // // // // //      {const sum = num1 + num2;
// // // // // // // // // // //       console.log(sum)};

    
// // // // // // // // // // // addNumber(4,54);

// // // // // // // // // // // function mama () {
// // // // // // // // // // //     console.log("Hello")
// // // // // // // // // // // }

// // // // // // // // // // // mama();

// // // // // // // // // // // function xyz (num1,num2) {
// // // // // // // // // // //     let sum = num1 + num2 ;
// // // // // // // // // // //     console.log(sum)
// // // // // // // // // // // };

// // // // // // // // // // // xyz(10,20);


// // // // // // // // // // // function welcome () {
// // // // // // // // // // //     console.log("Welcome to js")
// // // // // // // // // // // }

// // // // // // // // // // // welcome ();


// // // // // // // // // // // function bye () {
// // // // // // // // // // //     console.log("bye")
// // // // // // // // // // // }

// // // // // // // // // // // bye ();

// // // // // // // // // // // let getNumber = () => {
// // // // // // // // // // //     return 10;
// // // // // // // // // // // };

// // // // // // // // // // // let result = getNumber();

// // // // // // // // // // // console.log(result);


// // // // // // // // // // // let a = result*8

// // // // // // // // // // // console.log(a)


// // // // // // // // // // // function add () {
// // // // // // // // // // //     return 5 + 10;
// // // // // // // // // // // };

// // // // // // // // // // // let a = add();

// // // // // // // // // // // console.log(a);

// // // // // // // // // // // let double = (num) => {
// // // // // // // // // // //     return num * 2;
// // // // // // // // // // // };

// // // // // // // // // // // let d = double(5);

// // // // // // // // // // // console.log(d);

// // // // // // // // // // // const add = (num1,num2) => {
// // // // // // // // // // //     let sum = num1 + num2;
// // // // // // // // // // //     return sum;
// // // // // // // // // // // }

// // // // // // // // // // // let a = add(4,6);

// // // // // // // // // // // console.log(a);

// // // // // // // // // // // let ad = () => {
// // // // // // // // // // //     return 5 + 10;
// // // // // // // // // // // };

// // // // // // // // // // // let result = ad()

// // // // // // // // // // // console.log(result);


// // // // // // // // // // // Call Back Function

// // // // // // // // // // // function greet(){
// // // // // // // // // // //     console.log("Hello Ji, Kaise ho");
// // // // // // // // // // // }

// // // // // // // // // // // function meet(callback){
// // // // // // // // // // //     console.log("I am going to meet someone");
// // // // // // // // // // //     callback();
// // // // // // // // // // // }

// // // // // // // // // // // meet(greet);

// // // // // // // // // // // function blinkitOrderPlaced () {
// // // // // // // // // // //     console.log("we have started packing your Order");
// // // // // // // // // // // }
 
// // // // // // // // // // // function zomatoOrderPlaced () {
// // // // // // // // // // //     console.log("We have started preparing your food");
// // // // // // // // // // // }

// // // // // // // // // // // function Payment (amount, callback) {
// // // // // // // // // // //     console.log(`${amount} Payment has intialized`)

// // // // // // // // // // //     console.log("Payment is received");

// // // // // // // // // // //     callback ();
// // // // // // // // // // // }

// // // // // // // // // // // Payment(500,zomatoOrderPlaced);
// // // // // // // // // // // Payment(300,blinkitOrderPlaced);

// // // // // // // // // // let x = 10;

// // // // // // // // // // function outer() {
// // // // // // // // // //     let y = 20;

// // // // // // // // // //     function inner() {
// // // // // // // // // //         console.log(x);
// // // // // // // // // //         console.log(y);
// // // // // // // // // //     }

// // // // // // // // // //     inner();
// // // // // // // // // // }

// // // // // // // // // // outer();

// // // // // // // // // function outer() {
// // // // // // // // //     let x = 10;
// // // // // // // // // }

// // // // // // // // // function inner() {
// // // // // // // // //     console.log(x);
// // // // // // // // // }

// // // // // // // // // inner();

// // // // // // // // let name = "A";

// // // // // // // // function outer() {
// // // // // // // //     let name = "B";

// // // // // // // //     function inner() {
// // // // // // // //         console.log(name);
// // // // // // // //     }

// // // // // // // //     inner();
// // // // // // // // }

// // // // // // // // outer();

// // // // // // // function outer() {
// // // // // // //     let x = 10;

// // // // // // //     function inner() {
// // // // // // //         console.log(x);
// // // // // // //     }

// // // // // // //     return inner;
// // // // // // // }

// // // // // // // let fn = outer();

// // // // // // // fn();


// // // // // // function outer() {
// // // // // //     let message = "Hello";

// // // // // //     function inner() {
// // // // // //         console.log(message);
// // // // // //     }

// // // // // //     return inner;
// // // // // // }

// // // // // // let fn = outer();

// // // // // // fn();

// // // // // function outer() {
// // // // //     let x = 10;

// // // // //     return function inner() {
// // // // //         console.log(x);
// // // // //     };
// // // // // }

// // // // // let fn = outer();

// // // // // console.log("Done");
// // // // // fn();

// // // // const students = ["Rahul", "Amit", "Neha"];
 
// // // // for (let i = 0; i < students.length; i++) {
// // // //     console.log(students[i]);
// // // // }

// // // // const numbers = [10, 20, 30];

// // // // numbers.forEach(function(num) {

// // // //     console.log(num);

// // // // }); 


// // // // Array methods

// // // // ForEach()

// // // // const fruits = ["Apple", "Banana", "Mango", "Orange"];

// // // // fruits.forEach((x) => {
// // // //     console.log(x)
// // // // });

// // // // // multiply by 2 

// // // // const number = [2,4,6,8,10];

// // // // number.forEach((x) => {
// // // //     console.log(x*2);
// // // // } );

// // // // // index + values 

// // // // const names = ["Rahul", "Amit", "Manvesh", "Rohan"];

// // // // names.forEach((x,index,value) => {
// // // //     console.log(x,index,value)
// // // // })


// // // // /// calculate total 

// // // // const prices = [100, 250, 50, 300];
// // // // let total = 0;

// // // // prices.forEach((x) => {
// // // //     total = total + x;
// // // // });

// // // // console.log(total);

// // // // // question 

// // // // const numbers = [10, 20, 30, 40];

// // // // numbers.forEach((x) => {
// // // //     console.log(x+5);
// // // // });

// // // // // index,values

// // // // const fal = ["Apple", "Banana", "Mango"];

// // // // fal.forEach((u,index,element) => {
// // // //     console.log(u,index,element);
// // // // });

// // // // // total 

// // // // const marks = [70, 80, 90, 60];

// // // // let result = 0;

// // // // marks.forEach((b) => {
// // // //     result = result + b;
// // // // });

// // // // console.log(result);

// // // // filter
// // // // Q1 — Numbers greater than 20
// // // const numbers = [10, 25, 15, 40, 5, 30];

// // // const num = numbers.filter((x) => {
// // //     return x>20;
// // // });

// // // console.log(num)

// // // // Q2 Even numbers
// // // const number = [1, 2, 3, 4, 5, 6, 7, 8];

// // // const mat = number.filter((x) => {
// // //     return x % 2 ===0;
// // // });

// // // console.log(mat);

// // // // q3 Students who passed
// // // const marks = [35, 80, 42, 25, 90, 60];

// // // const result  = marks.filter(function(mama){
// // //     return mama > 50;
// // // })

// // // console.log(result);

// // // // Q4 — Filter names

// // // const names = ["Amit", "Rahul", "Ankit", "Rohan", "Ajay"];

// // // const lala = names.filter(function(waw){
// // //     return waw.length>4;
// // // });

// // // console.log(lala);


// // // Map()
// // // Q1 — Multiply by 2
// // const numbers = [2, 4, 6, 8, 10];

// // const op = numbers.map(function(lala) {
// //     return lala * 2;
// // });

// // console.log(op);

// // // Q2 — Add 10 
// // const number = [5, 10, 15, 20];

// // const ut = number.map((x) => {
// //     return x+10;
// // });

// // console.log(ut);

// // // Convert names to uppercase
// // const names = ["amit", "rahul", "manvesh", "rohan"];

// // const upper = names.map((x) => {
// //     return x.toUpperCase()
// // });

// // console.log(upper);


// // // Q4 — Get names from objects ⭐

// // const users = [
// //     { name: "Amit", age: 20 },
// //     { name: "Rahul", age: 21 },
// //     { name: "Manvesh", age: 20 }
// // ];

// // const name = users.map((user) => {
// //     return user.name;
// // });

// // console.log(names);
// // Q1 — Sum of numbers ⭐

// const numbers = [10, 20, 30, 40];

// const chacha = numbers.reduce((acc,curr) => {
//     return acc + curr;
// },0);

// console.log(chacha);

// // Q2 — Multiply all numbers

// const number = [2, 3, 4, 5];

// const mama = number.reduce((x,y) => {
//     return x*y;
// },1);

// console.log(mama);

// //q3 Calculate total price 

// const prices = [100, 250, 50, 300];

// const friend = prices.reduce((x,y) => {
//     return  x + y ;
// },0);

// console.log(friend);


// /// Q4 — Find the largest number

// const num = [25, 10, 75, 40, 90, 30];

// const largest = num.reduce((x, y) => {
//     if (y > x) {
//         return y;
//     } else {
//         return x;
//     }
// }, 0);

// console.log(largest);

// // find the total 

// const expenses = [200, 150, 300, 100, 250];

// const big = expenses.reduce((x,y) => {
//     return x + y ;
// },0);

// console.log(big);

// // Q2 — Find the smallest number

// const numbe = [45, 12, 78, 5, 34, 20];

// const smallest = numbe.reduce((x, y) => {
//     if (y < x) {
//         return y;
//     } else {
//         return x;
//     }
// }, numbers[0]);

// console.log(smallest); // 5

// const title = document.getElementById("title");
// const button = document.getElementById("btn");

// button.addEventListener("click", function () {
//   title.textContent = "Welcome!";
// });

// DOM

// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//     console.log("Button clicked!");
// });

btn.addEventListener("click", () => {
    btn.textContent = "Clicked!";
});