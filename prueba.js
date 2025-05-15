function calculateTotal(products) {
    let total = 0;
    let i = 0;
    while (i < products.length) {
        if (products[i].discount) {
            total += products[i].price * 0.9;
        } else {
            total += products[i].price;
        }
        i++;
        if (i === products.length) console.log("Total: $" + total);
    }
}

calculateTotal([{ price: 10, discount: true }, { price: 20, discount: false }])


function applyDiscount(price, hasDiscount) {
    return hasDiscount ? price * 0.9 : price;
}

function calculateTotal(products) {
    let total = 0;
    for (const product of products) {
        total += applyDiscount(product.price, product.discount);
    }
    return total;
}

const total = calculateTotal([{ price: 10, discount: true }, { price: 20, discount: false }]);
console.log("Total: $" + total);