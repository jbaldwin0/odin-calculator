function add(a,b) {
    return a+b;
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
        add(a,b);
    } else if (op == "-") {
        subtract(a,b);
    } else if (op == "*") {
        multiply(a,b);
    } else if (op == "/") {
        divide (a,b);
    }
}

let inDisplay = document.querySelector("#input");
const buttons = document.querySelectorAll(".num").forEach(e => {
    e.addEventListener('click', () => {
        useCalc(e);
    });
});

function useCalc (e) {
    console.log(e.textContent);
    if (e.textContent == "Clear") {
        inDisplay.textContent = "0";
        console.log("first")       
    } else if (inDisplay.textContent != "0"){
        inDisplay.append(e.textContent);
        console.log("third")
    } else if (inDisplay.textContent = "0") {
        inDisplay.textContent = e.textContent;
        console.log("second")
    }

}
