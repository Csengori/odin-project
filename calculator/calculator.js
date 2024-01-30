// Global variables
const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".digit");
const disp = document.querySelector(".display");
const equals = document.querySelector("#equal");
const operator = document.querySelectorAll(".operator");
const percentageBtn = document.querySelector("#percent");
const decimalBtn = document.querySelector("#decimal");
const plusminusBtn = document.querySelector("#plusminus");
const clear = document.querySelector("#clear");
let decimal;
let plusminus;
let currentNum = "";
let previousNum = null;
let opr = null;
let numsCleared = false;
let equalsCleared = false;

// reset flag when number/equals btn is clicked
function clearOnNextNum() {
    if (numsCleared) {
        numsCleared = false;
        disp.textContent = "";
    } else if (opr === null && equalsCleared && previousNum !== "") {
        disp.textContent = "";
        currentNum = "";
        equalsCleared = false;
    }
    else if (equalsCleared && previousNum !== "") {
        disp.textContent = "";
        equalsCleared = false;
    }
    equalsCleared = false;
}

// handles number buttons
numbers.forEach((number) => {
    number.addEventListener('click', numberHandler)
});

document.addEventListener('keydown', e => {
    switch (e.key) {
        case "1":
            numberHandler(e);
            break;
        case "2":
            numberHandler(e);
            break;
        case "3":
            numberHandler(e);
            break;
        case "4":
            numberHandler(e);
            break;
        case "5":
            numberHandler(e);
            break;
        case "6":
            numberHandler(e);
            break;
        case "7":
            numberHandler(e);
            break;
        case "8":
            numberHandler(e);
            break;
        case "9":
            numberHandler(e);
            break;
        case "0":
            numberHandler(e);
            break;
    }
});

function numberHandler(e) {
    if (disp.textContent === "Y u do dis?") {
        clearBtn();
        return
    };
    clearOnNextNum();
    if (disp.textContent.length < 8) {
        if (e.key || e.target.innerText) {
            disp.textContent += e.key || e.target.innerText;
            currentNum += e.key || e.target.innerText;
            currentNum = parseFloat(currentNum);
            console.log(currentNum);
        }
    };
};

// handles operator buttons
operator.forEach((button) => {
    button.addEventListener('click', operatorHandler)
});

document.addEventListener('keydown', e => {
    if (e.key === '+' || e.key === '/' || e.key === '-' || e.key === '*') {
        operatorHandler(e);
    }
    return
});

function operatorHandler(e) {
    if (disp.textContent === "Y u do dis?" || disp.textContent === "") {
        return
    }
    if (currentNum === "" && previousNum !== null) {
        return
    }
    if (opr === null) {
        previousNum = currentNum;
    } else if (previousNum != null) {
        disp.textContent = "";
        previousNum = operate(previousNum, currentNum);
        console.log(previousNum);
    }
    if (e.key || e.target.innerText) {
        opr = e.key || e.target.innerText;
    };
    console.log(opr);
    currentNum = "";
    numsCleared = true;
}

// handles equals button
equals.addEventListener('click', equalBtn);

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
        equalBtn();
    }
});

function equalBtn() {
    if (disp.textContent === "" || equalsCleared) {
        return
    } else if (currentNum !== null && previousNum !== null) {
        disp.textContent = "";
        currentNum = operate(previousNum, currentNum);
        console.log(previousNum);
        opr = null;
        equalsCleared = true;
        // currentNum = "";
    }
}


percentageBtn.addEventListener('click', validateBeforePercentage);

document.addEventListener('keydown', e => {
    if (e.key === '%') {
        validateBeforePercentage();
    }
});

function validateBeforePercentage() {
    if (disp.textContent === "") {
        return
    }
    disp.textContent = "";
    currentNum = percentage();
}


decimalBtn.addEventListener('click', inputDecimal);

document.addEventListener('keydown', e => {
    if (e.key === '.') {
        inputDecimal();
    }
});

function inputDecimal() {
    decimal = decimalBtn.innerText;
    console.log(decimal);
    if (disp.textContent === "") {
        disp.textContent = 0 + decimal;
        currentNum = 0 + decimal;
    } else if (currentNum.toString().includes(".") || currentNum.toString().includes(".")) {
        return
    } else if (currentNum === "") {
        disp.textContent = 0 + decimal;
        currentNum = 0 + decimal;
        numsCleared = false;
    }
    else {
        disp.textContent = currentNum + decimal;
        currentNum = currentNum + ".";
    }
};

plusminusBtn.addEventListener('click', (e) => {
    console.log(e.target.innerText);
    if (disp.textContent === "" || currentNum === "") {
        return
    } else if (currentNum < 0) {
        // converts negative num to positive
        currentNum = Math.abs(currentNum);
        disp.textContent = currentNum;
    } else if (currentNum >= 0) {
        disp.textContent = -currentNum;
        currentNum = "-" + currentNum;
        currentNum = parseFloat(currentNum);
    }
    else if (previousNum < 0) {
        // this is to cover for when the equals btn is pressed
        previousNum = Math.abs(previousNum);
        disp.textContent = currentNum;
    } else if (previousNum >= 0) {
        disp.textContent = -previousNum;
        previousNum = "-" + previousNum;
        previousNum = parseFloat(previousNum);
    } else {
        return
    }
});

// clear display & variables using ac button
clear.addEventListener('click', clearBtn);


document.addEventListener('keydown', e => {
    if (e.key === 'Delete') {
        console.log("its workin");
        clearBtn();
    }
});

function clearBtn() {
    disp.textContent = "";
    currentNum = "";
    previousNum = null;
    opr = null;
}

const del = document.querySelector("#delete");
del.addEventListener('click', deleteLastDigit);


function deleteLastDigit() {
    if (currentNum && previousNum === null) {
        disp.textContent = disp.textContent.slice(0, -1);
        currentNum = parseFloat(currentNum.toString().slice(0, -1));
        console.log(currentNum);
    } else if (currentNum !== null && previousNum !== null) {
        disp.textContent = disp.textContent.slice(0, -1);
        currentNum = parseFloat(currentNum.toString().slice(0, -1));
        console.log(currentNum);
    }
};

document.addEventListener('keydown', function(e) {
    let keycode = e.code
    let key = e.key
    console.log(keycode, key);
});


function operate(previousNum, currentNum) {
    switch (opr) {
        case "+":
            return add(previousNum, currentNum);
        case "-":
            return sub(previousNum, currentNum);
        case "/":
            return divide(previousNum, currentNum);
        case "*":
            return multiply(previousNum, currentNum);
    }
};

// calculations
let result;

function limitDigitsOnDisplay() {
    if (result.toString().length > 8 && result.toString().includes(".")) {
        if (Math.trunc(result * 100000) / 100000 > 8) {
            result = Number.parseFloat(result).toExponential(2)
        } else {
            result = Math.trunc(result * 100000) / 100000;
        }
    } else if (result.toString().length > 8) {
        result = Number.parseFloat(result).toExponential(2);
    }
}

function add(a, b) {
    console.log(a + b);
    result = a + b;
    limitDigitsOnDisplay();
    disp.textContent += result;
    return a + b
}

function sub(a, b) {
    console.log(a - b);
    result = a - b;
    limitDigitsOnDisplay();
    disp.textContent += result;
    return a - b
};

function divide(a, b) {
    console.log(a / b);
    if (b === 0) {
        disp.textContent += "Y u do dis?";
        return "Y u do dis?";
    }
    result = a / b;
    limitDigitsOnDisplay();
    disp.textContent += result;
    return a / b
};

function multiply(a, b) {
    console.log(a * b);
    result = a * b;
    limitDigitsOnDisplay();
    disp.textContent += result;
    return a * b
};

function percentage() {
    a = previousNum;
    b = currentNum;
    if (a && b) {
        disp.textContent += b / 100;
        console.log(b / 100)
        return b / 100;
    } else {
        disp.textContent += b / 100;
        console.log(b / 100);
        return b / 100;
    }
};