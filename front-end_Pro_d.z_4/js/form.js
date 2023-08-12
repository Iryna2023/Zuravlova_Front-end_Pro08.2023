function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function sub(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function mult(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function div(firstNumber, secondNumber){
    if(secondNumber === 0){
        return 'error';
    }
    else{
        return firstNumber / secondNumber;
    }
}

const sign = prompt('please choose an action : add, sub, mult, div', '')

const firstNumber = parseInt(prompt('Please enter first number:', ''));

const secondNumber = parseInt(prompt('Please enter the second number:', ''));

if (sign==='add')alert(("add: " + firstNumber + " + " + secondNumber + " = ") + add(firstNumber, secondNumber));

else
    if (sign==='sub')alert(("sub: " + firstNumber + " - " + secondNumber + " = ") + sub(firstNumber, secondNumber));

else
    if (sign==='mult')alert(("mult: " + firstNumber + " * " + secondNumber + " = ") + mult(firstNumber, secondNumber));

else
    if(sign==='div')alert(("div: " + firstNumber + " / " + secondNumber + " = ") + div(firstNumber, secondNumber));
    