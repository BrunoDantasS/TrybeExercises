let manufacturingCost = 100;
let saleValue = 200;
let quantifyProducts = 1000;



if (manufacturingCost > 0 || saleValue > 0) {
    console.log((saleValue - (manufacturingCost + manufacturingCost * 0.2)) * quantifyProducts);
}
else {
    console.log("Wrong! Enter a value greater than zero");
}