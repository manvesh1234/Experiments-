let order = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("Laptop delivered!");
    } else {
        reject("Order cancelled!");
    }
});

order
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });