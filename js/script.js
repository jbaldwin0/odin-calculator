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
    if (e.textContent == "Clear") {
        inDisplay.textContent = "0";
        outDisplay.textContent = "0";  
    }
    else if (e.textContent == "=") {
        let str = inDisplay.textContent;
        let nums = str.split(/\D/g);
        console.log(nums);
        let operand = str.split(/[0-9]+/g);
        console.log(operand);
       /* let num1 = nums[0];
        let num2 = nums[1];
        let op = operand[1]; */
        let num1, num2, op;
        let result = 0;
        for (let i = 1; i < operand.length-1; i++) {
            if (i == 1) {
                num1 = nums.shift();
                num2 = nums.shift();
            }
            else {
                num1 = result;
                num2 = nums.shift();
            }
            op = operand[i];
            console.log(op+" "+num1+" "+num2);
            result = operate(op, num1, num2);                   
        }
        if (result == NaN || result == undefined) {
            outDisplay.textContent = "ERROR";
        }
        else {
            console.log(result); 
            outDisplay.textContent = result;
        }
    }    
    else if (inDisplay.textContent != "0"){
        inDisplay.append(e.textContent);
    }   
    else if (inDisplay.textContent == "0") {
        inDisplay.textContent = e.textContent;
    }
}
