let grossPay = 3000;
let inss;
let ir;
let basePay;
let netPay;



if (grossPay > 0 && grossPay < 1556.95) {
    inss = grossPay * 0.08;
    basePay = grossPay - inss;
}
else if (grossPay > 1556.94 && grossPay < 2594.93) {
    inss = grossPay * 0.09;
    basePay = grossPay - inss;
}
else if (grossPay > 2594.92 && grossPay < 5189.83) {
    inss = grossPay * 0.11;
    basePay = grossPay - inss;
}
else if (grossPay > 5189.82) {
    inss = 570.88;
    basePay = grossPay - inss;
}
else {
    console.log("Enter a valid number");
}


if (grossPay > 0 && grossPay < 1903.99) {
    ir = 0;
    netPay = basePay - ir;
}
else if (basePay > 1903.98 && basePay < 2826.66) {
    ir = basePay * 0.075 - 142.8;
    netPay = basePay - ir;
}
else if (basePay > 2826.65 && basePay < 3751.06) {
    ir = basePay * 0.15 - 354.80;
    netPay = basePay - ir;
}
else if (basePay > 3751.05 && basePay < 4664.69) {
    ir = basePay * 0.225 - 636.13;
    netPay = basePay - ir;
}
else if (basePay > 4664.68) {
    ir = basePay * 0.275 - 869.36;
    netPay = basePay - ir;
}
else {
    console.log("Enter a valid number");
}


console.log(netPay);
