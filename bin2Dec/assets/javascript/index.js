function App() {

    const binaryInput = document.querySelector('.input-app');

    const binaryButton = document.querySelector('.button-app');

    const binaryDisplay = document.querySelector('.display-converted-app');

    binaryInput.addEventListener('keyup', logKey);

    binaryButton.addEventListener('click', e => {
        e.preventDefault();
        const number = binaryInput.value;

        // Check Input, if no value, display an alert and dont proceed.
        if (!number) return alert('Informe algum valor para realizar a conversão!');

        convertNumber(number);
    });

    // Check if numbers 0 or 1 is pressed, if not send an alert
    function logKey(e) {
        const keyPress = parseFloat(e.key);

        // Variable to use position in function
        let characters = binaryInput.value.length;

        if (keyPress < 0 || keyPress > 1) {
            delIncorrectNumber(characters);
            return alert('Informe somente 0 ou 1.');
        }
    }

    // Convert number
    function convertNumber(value) {
        decimal = parseInt(value, 2);
        return binaryDisplay.innerHTML = decimal;
    }

    // Remove incorrect number
    function delIncorrectNumber(position) {
        console.log(binaryInput.value.slice(0, (position - 1)));
        const inputNew = binaryInput.value.slice(0, (position - 1));
        binaryInput.value = inputNew;
    }
}

App();