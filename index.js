let num1; 
let num2; 
let operator;
let result; 

let allNumbers = document.querySelectorAll(".number-button"); 
[...allNumbers].forEach(function(num) {
    num.addEventListener("click", () => {
        if (operator == undefined) {
            num1 = (num1 == undefined ? (num1 = num.textContent) : (num1 += num.textContent)); 
            printNumbers(); 
        } else {
            num2 = (num2 == undefined ? (num2 = num.textContent) : (num2 += num.textContent));
            printNumbers(); 
        }
    })
});

let allArithmetic = document.querySelectorAll(".arithmetic-button"); 
[...allArithmetic].forEach(function(arith) {
    arith.addEventListener("click", () => {
        operator = arith.getAttribute("id"); 
    })
});

document.querySelector("#equals").addEventListener("click", () => {
    launchArithmetic(num1, num2, operator);
});

document.querySelector("#clear").addEventListener("click", () => {
    launchClear();
});

function launchArithmetic(number1, number2, operator) {
    number1 = Number(number1); 
    number2 = Number(number2); 
    if (operator == "addition") {
        result = number1 + number2; 
    } else if (operator == "subtraction") {
        result = number1 - number2; 
    } else if (operator == "multiplication") {
        result = number1 * number2; 
    } else {
        result = number1 / number2; 
    }
    document.querySelector("#result").textContent = result; 
}

function launchClear() {
    num1 = undefined; 
    num2 = undefined; 
    operator = undefined; 
    result = undefined; 
    document.querySelector("#result").textContent = ""; 
}

function printNumbers() {
    if (operator == undefined) {
        document.querySelector("#result").textContent = num1; 
    } else {
        document.querySelector("#result").textContent = num2; 
    }
}