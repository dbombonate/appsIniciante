function calc(){
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const allClear = document.querySelector('.app-button-all-clear');
    const btnEqual = document.querySelector('.app-button-equal-sign');

    const displayCalc = document.querySelector('.app-display-operations');
    const displayOperator = document.querySelector('.app-display-operator');
    const displayResult = document.querySelector('.app-display-up');
    
    numbers.forEach((button) => {
        button.addEventListener('click', insertNumber);
    });

    operators.forEach((operator) => {
        operator.addEventListener('click', insertOperator);
    });

    allClear.addEventListener('click', allClean);

    btnEqual.addEventListener('click', calculate);

    function insertNumber(e) {
        displayCalc.innerHTML += e.target.value;
    };

    function insertOperator(e) {
        let operator = e.target.value;
        displayOperator.innerHTML = operator;
        displayCalc.innerHTML += operator;
    };

    function allClean() {
        displayCalc.innerHTML = '';
        displayOperator.innerHTML = '';
        displayResult.innerHTML = '';
    }

    function calculate(){
        let calculation = displayCalc.innerText;
        displayResult.innerHTML = eval(calculation);
        displayCalc.innerHTML = '';
    };
}

calc();