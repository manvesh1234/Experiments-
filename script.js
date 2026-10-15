
let myPromise = new Promise((resolve, reject) => {
    let laptopDelivered = true;

    if (laptopDelivered) {
        resolve("Laptop delivered successfully!");
    } else {
        reject("Laptop delivery failed!");
    }
});

myPromise
    .then((result) => {
        console.log("ASUS " + result);
        return "Laptop is now ready to use!";
    })
    .then((message) => {
        console.log(message);
        return "Enjoy your new laptop!";
    })
    .then((finalMessage) => {
        console.log(finalMessage);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Laptop delivery process finished!");
    });
