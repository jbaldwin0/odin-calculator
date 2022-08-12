function add(a,b) {
    return (+a)+(+b);
}

function subtract(a,b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(op, a, b) {
    console.log(op+" "+a+" "+b);
    if (op == "+") {
        return add(a, b);
    } else if (op == "-") {
        return subtract(a, b);
    } else if (op == "*") {
        return multiply(a, b);
    } else if (op == "/") {
        return divide (a, b);
    }
}

let inDisplay = document.querySelector("#input");
let outDisplay = document.querySelector("#output");

const buttons = document.querySelectorAll(".num").forEach(e => {
    e.addEventListener('click', () => {
        useCalc(e);
    });
});

function useCalc (e) {
    console.log(e.textContent);
    if (e.textContent == "Clear") {
        inDisplay.textContent = "0";   
    }
    else if (e.textContent == "=") {
        let str = inDisplay.textContent;
        let nums = str.split(/\D/);
        let operand = str.split(/[0-9]+/);
        let num1 = nums[0];
        let num2 = nums[1];
        let op = operand[1];
        console.log(operate(op, num1, num2))
        outDisplay.textContent = operate(op, num1, num2);
    }    
    else if (inDisplay.textContent != "0"){
        inDisplay.append(e.textContent);
    }   
    else if (inDisplay.textContent == "0") {
        inDisplay.textContent = e.textContent;
    }
}
