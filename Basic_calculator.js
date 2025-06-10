const readlineSync = require("readline-sync");
const num1 = Number(readlineSync.question("pls enter the first number = "));
const num2 = Number(readlineSync.question("pls enter Second number = "));
const op = String(readlineSync.question("please enter the operator "));
if(op === "+"){   
    console.log(`result is ${num1 + num2}`);
}else if(op === "-"){
    console.log(`result is ${num1 - num2}`);
}else if(op === "*"){
    console.log(`result is ${num1 * num2}`);
}else if(op === "/"){    
    if(num2 === 0){
        console.log("sencond number cannot be 0");
    }else{
    console.log(`result is ${num1 / num2}`);
    }
}
