export function formatPrice(price: number) {
    return(price / 100).toLocaleString("en-us", {
        style: "currency", 
        currency: "USD",
    });
<<<<<<< HEAD
}
=======
}
>>>>>>> b766a8736ee9fa9ace61951b3ab0ae6228a7b8b9
