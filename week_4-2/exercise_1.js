let num = 5;
let array = [];

if (num > 0) {
    for (let i = 0; i < num; i++) {
        array.push("*");
        
    }
    for (let i = 0; i < num; i++) {
        console.log(array.join(""));
        
    }
} else {
    console.log("Enter a valid number");
    
}
