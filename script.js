
// let myPromise = new Promise((resolve, reject) => {
//     let laptopDelivered = ;

//     if (laptopDelivered) {
//         resolve("Laptop delivered successfully!");
//     } else {
//         reject("Laptop delivery failed!");
//     }
// });

// myPromise
//     .then((result) => {
//         console.log("ASUS " + result);
//         return "Laptop is now ready to use!";
//     })
//     .then((message) => {
//         console.log(message);
//         return "Enjoy your new laptop!";
//     })
//     .then((finalMessage) => {
//         console.log(finalMessage);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Laptop delivery process finished!");
//     });


fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        if (!response.ok) {
            throw new Error("HTTP request failed");
        }

        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("Request completed!");
    });