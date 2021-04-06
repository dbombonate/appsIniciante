const binaryInput = document.querySelector('.input-app');
const binaryButton = document.querySelector('.button-app');
const binaryDisplay = document.querySelector('.display-converted-app');

binaryInput.addEventListener('keyup', logKey);
binaryButton.addEventListener('click', e =>{
    e.preventDefault();
    const number = binaryInput.value;
    convertNumber(number);
});

function logKey(e) {
    const keyPress = parseFloat(e.key);
    if (keyPress < 0 || keyPress > 1) {
        delIncorrectNumber();
        return alert('Informe somente 0 ou 1...');
    }
}

function convertNumber(value){
    let base = (value.length) - 1;
    let valPosition = value.slice(0, 1);
    let deci = valPosition*2^base
    console.log(base, valPosition, deci);
    /*while (base > 0) {
        let deci = valPosition*2^base
        base--
    }*/
    return binaryDisplay.innerHTML = value;
}

function delIncorrectNumber(){
    return
}