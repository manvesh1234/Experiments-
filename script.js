
// // // // // let myPromise = new Promise((resolve, reject) => {
// // // // //     let laptopDelivered = ;

// // // // //     if (laptopDelivered) {
// // // // //         resolve("Laptop delivered successfully!");
// // // // //     } else {
// // // // //         reject("Laptop delivery failed!");
// // // // //     }
// // // // // });

// // // // // myPromise
// // // // //     .then((result) => {
// // // // //         console.log("ASUS " + result);
// // // // //         return "Laptop is now ready to use!";
// // // // //     })
// // // // //     .then((message) => {
// // // // //         console.log(message);
// // // // //         return "Enjoy your new laptop!";
// // // // //     })
// // // // //     .then((finalMessage) => {
// // // // //         console.log(finalMessage);
// // // // //     })
// // // // //     .catch((error) => {
// // // // //         console.log(error);
// // // // //     })
// // // // //     .finally(() => {
// // // // //         console.log("Laptop delivery process finished!");
// // // // //     });


// // // // fetch("https://jsonplaceholder.typicode.com/users/1")
// // // //     .then((response) => {
// // // //         if (!response.ok) {
// // // //             throw new Error("HTTP request failed");
// // // //         }

// // // //         return response.json();
// // // //     })
// // // //     .then((data) => {
// // // //         console.log(data);
// // // //     })
// // // //     .catch((error) => {
// // // //         console.log(error.message);
// // // //     })
// // // //     .finally(() => {
// // // //         console.log("Request completed!");
// // // //     });

// // // // const abc = () => {
// // // //     let a = 1;
// // // //     let b = 2;
// // // //     return a+b;

// // // // }

// // // // let result = abc();
// // // // console.log(result);


// // // // Promises
// // // // Create a Promise that resolves with the message "I completed JavaScript". Print the message using `.then()`.

// // // // const myPromise = new Promise ((resolve, reject) => {
// // // //     let statement = true;

// // // //     if (statement) {
// // // //       resolve ("I completed Javascript")
// // // //     } else {
// // // //         reject ("Failed")
// // // //     }
// // // // });

// // // // myPromise 
// // // //  .then((result) => {
// // // //     console.log(result)
// // // //  })
// // // //  .catch ((fail) => {
// // // //     console.log(fail)
// // // //  })

// // // //  Q2. Resolve or reject?
// // // // Create a variable `paymentDone = false`. If true, resolve with "Payment successful"; otherwise, reject with "Payment failed". Handle both outcomes.

// // // // [ ] 
// // // // Q3. Use your own parameter names
// // // // Create a Promise using `success` and `failure` instead of `resolve` and `reject`. Make it resolve with "Hello JavaScript".

// // // // [ ] 
// // // // Q4. Use `.finally()`
// // // // Create a Promise that rejects with "Something went wrong". Print the error and then print "Process finished" using `.finally()`.

// // // let paymentDone = new Promise((resolve,reject) => {
// // //     let paymentDone = false;

// // //   if (paymentDone) {
// // //     resolve ("Payment successful")
// // //   } else {
// // //     reject ("Payment failed")
// // //   }
// // // });

// // // paymentDone
// // //  .then((result) => {
// // //     console.log(result);
// // //  })
// // //  .catch((error) => {
// // //     console.log(error);
// // //  });


// // //  // Q3. Use your own parameter names
// // // // Create a Promise using `success` and `failure` instead of `resolve` and `reject`. Make it resolve with "Hello JavaScript".

// // // const mama = new Promise ((success,failure) => {
// // //     let mama = true ;

// // //     if (mama) {
// // //         success("Hello JavaScript")
// // //     } else {
// // //         failure("Problem")
// // //     }
// // // });

// // // mama
// // // .then((result) => {
// // //     console.log(result);
// // // })
// // // .catch((error) => {
// // //     console.log(error);
// // // });


// // // // Q4. Use `.finally()`
// // // // Create a Promise that rejects with "Something went wrong". Print the error and then print "Process finished" using `.finally()`.

// // // const dada = new Promise ((resolve,reject) => {
// // //     let data = false;

// // //     if(data){
// // //         resolve("success");
// // //     } else {
// // //         reject("Something went wrong");
// // //     }
// // // });

// // // dada
// // // .then((result)=> {
// // //     console.log(result);
// // // })
// // // .catch((error)=> {
// // //     console.log(error);
// // // })

// // // .finally(() => {
// // //     console.log("Process Finished Time OUT")
// // // })


// // // Level 2 — Promise chaining
// // // Q5. Predict the output
// // // Promise.resolve(10)
// // //     .then((n) => n * 2)
// // //     .then((n) => n + 5)
// // //     .then((n) => console.log(n));

// // // Q6. Multiple .then() methods
// // // Using your laptop delivery example, create three .then() methods that print:
// // // 1. Laptop delivered successfully!
// // // 2. Laptop is now ready to use!
// // // 3. Enjoy your new laptop!


// // const laptop = new Promise ((resolve,reject)=> {
// //     const laptop = false;
// //    if (laptop){
// //     resolve("Laptop delivered successfully!");
// //    } else {
// //     reject("Laptop delivery failed");
// //    }
// // });

// // laptop
// // .then((result) =>  {
// //     console.log(result);
// //     return ("Laptop is now ready to use");
// // })
// // .then((done)=> {
// //    console.log(done);
// //    return ("Enjoy your new Laptop!");
// // })
// // .then((right)=>{
// //     console.log(right);
// // })
// // .catch((error)=> {
// //     console.log(error);
// // });

// // Promise.reject("Failed")
// //     .catch((err) => {
// //         console.log(err);
// //         throw "Recovered";
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });

// // Promise.resolve("Start")
// //     .then((msg) => {
// //         console.log(msg);
// //         throw new Error("Oops");
// //     })
// //     .then(() => {
// //         console.log("Success");
// //     })
// //     .catch((err) => {
// //         console.log(err.message);
// //     })
// //     .finally(() => {
// //         console.log("Finished");
// //     });


// // Q9. Promise with setTimeout()
// // Create a Promise that resolves with "Data loaded" after 2 secne wonds.



// // let myPromise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve("Data loaded");
// //     }, 2000);
// // });

// // console.log("Loading...");

// // myPromise.then((result) => {
// //     console.log(result);
// // });


// // Fetch API
 
// // Fetch a single user
// fetch("https://jsonplaceholder.typicode.com/users/10")
//  .then((response) => {
//     if(!response.ok){
//         throw new Error("HTTP Request is failed")
//     }
//     return response.json();
//  })

//  .then((data) => {
//     console.log(data.name);
//  })

//  .catch((error)=> {
//     console.log(error.message);
//  })

// // Fetch multiple users

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if (!response.ok){
//         throw new Error ("HTTP Request is Failed")
//     }
//     return response.json();
//   })

//   .then((data) => {
//     const names = data.map((item) => {
//         return item.name;
//     })
//         console.log(names)
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })

  
// Async Await 

async function demo() {
    const response = await fetch(
        "https://api.github.com/users"
    );
    const data = await response.json();
    console.log(data);
}

demo();
console.log("Hello");

// try catch , throw 


async function getGitHubUsers() {
    try {
        const response = await fetch(
            "https://api.github.com/uss"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const dat = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getGitHubUsers();

async function userDetail() {
    const [comment, photos, chat] = await Promise.all([
        fetch("/comments"),
        fetch("/photos"),
        fetch("/chat")
    ]);

    console.log(comment, photos, chat);
}

userDetail();