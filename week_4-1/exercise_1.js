let a = 10;
let b = 5;

let operation = ["addition", "subtraction", "multiplication", "division", "remainder"]

for (let i = 0; i < operation.length; i++) {
    const element = operation[i];
    
    switch (element) {
        case "addition":
        console.log("The addition of the numbers is equal to", a + b);
        break;

        case "subtraction":
        console.log("The subtraction of the numbers is equal to", a - b);
        break;

        case "multiplication":
        console.log("The multiplication of the numbers is equal to", a * b);
        break;
        
        case "division":
        console.log("The division of the numbers is equal to", a / b);
        break;
        
        case "remainder":
        console.log("The remainder of the numbers is equal to", a % b);
        break;
        
        default:
        console.log("Error");
        break;
    }
}

