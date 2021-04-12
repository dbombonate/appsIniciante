const binaryInput = document.querySelector('.input-app');
const binaryButton = document.querySelector('.button-app');
const binaryDisplay = document.querySelector('.display-converted-app');

binaryInput.addEventListener('keyup', logKey);
binaryButton.addEventListener('click', e =>{
    e.preventDefault();
    const number = binaryInput.value;
    convertNumber(number);
});

// Check if numbers 0 or 1 is pressed, if not send an alert
function logKey(e) {
    const keyPress = parseFloat(e.key);
    if (keyPress < 0 || keyPress > 1) {
        delIncorrectNumber();
        return alert('Informe somente 0 ou 1.');
    }
}

// Convert number
function convertNumber(value){
    decimal = parseInt(value, 2);
    return binaryDisplay.innerHTML = decimal;
}

function delIncorrectNumber(){
    return
}