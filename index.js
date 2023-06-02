let num1 = -1; 
let num2; 
let operator; 

let allNumbers = document.querySelectorAll(".number-button"); 
[...allNumbers].forEach(function(num) {
    num.addEventListener("click", () => {
        numberController(Number(num.textContent)); 
    })
});

let allArithmetic = document.querySelectorAll(".arithmetic-button"); 
[...allArithmetic].forEach(function(arith) {
    arith.addEventListener("click", () => {
        operator = arith.getAttribute("id"); 
    })
})

function numberController(number) {
    if (num1 == -1) {
        num1 = number; 
    } else {
        num2 = number; 
        let result = Number(launchArithmetic(num1, num2, operator)); 
        console.log(result); 
    }
}

function launchArithmetic(number1, number2, operator) {
    if (operator == "addition") {
        return number1 + number2; 
    } else if (operator == "subtraction") {
        return number1 - number2; 
    } else if (operator == "multiplication") {
        return number1 * number2; 
    } else {
        return number1 / number2; 
    }
}