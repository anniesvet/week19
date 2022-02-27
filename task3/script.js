class Calculator {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }

sum() {
    return +this.a + +this.b;
}

minus() {
    return this.a - this.b;
}

times() {
    return this.a * this.b;
}

divide() {
    return this.a / this.b;
}

}

let op; 

function calcResult() {

    let result;

    let data = new Calculator (document.getElementById("getNumber1").value, document.getElementById("getNumber2").value);

    switch(op) {
    case '+':
        result = data.sum();
    case '-':
        result = data.minus();
        break;
    case '*':
        result = data.times();
        break;
    case '/':
        result = data.divide();
        break;
}

    document.getElementById("result").innerHTML = result;

    if (isNaN(result)) {
    alert('Кажется, вы ввели не число');
    document.getElementById("result").innerHTML = 'Попробуйте ввести числа для вычисления';
    }

    if (result === Infinity) {
        alert('На ноль делить нельзя!');
        document.getElementById("result").innerHTML = 'Попробуйте поделить не на 0';
    }

}



// Старое решение:

// let op; 

// function calcResult() {

// let result;

// let getNumber1 = document.getElementById("getNumber1").value;
// let getNumber2 = document.getElementById("getNumber2").value;

// switch(op) {
//     case '+':
//         result = +getNumber1 + +getNumber2;
//         break;
//     case '-':
//         result = getNumber1 - getNumber2;
//         break;
//     case '*':
//         result = getNumber1 * getNumber2;
//         break;
//     case '/':
//         result = getNumber1 / getNumber2;
//         break;
// }

// document.getElementById("result").innerHTML = result;

// if (isNaN(result)) {
//     alert('Кажется, вы ввели не число');
//     document.getElementById("result").innerHTML = 'Попробуйте ввести числа для вычисления';
// }

// if (result === Infinity) {
//     alert('На ноль делить нельзя!');
//     document.getElementById("result").innerHTML = 'Попробуйте поделить не на 0';
// }

// }




