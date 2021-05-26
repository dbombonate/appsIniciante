document.addEventListener('submit', (e) => {
    
    const timeToWait = document.querySelector('#timeToWait').value;
    const bakerTimersValue = document.querySelector('#bakerTimers').value;
    
    e.preventDefault();
    let bakerTimers = validaInputs(timeToWait, bakerTimersValue);

    localStorage.setItem('time', timeToWait);
    localStorage.setItem('bakersTimers', bakerTimers);

    formReset();
    
})

function validaInputs(timeToWait, bakerTimers){
    if (!timeToWait || !bakerTimers) return alert('Informe valores válidos nos campos!');
    let array = bakerTimers.split(',');
    return array;
}

function formReset(){
    alert('Dados Gravados com sucesso!');
    const inputTimeToWait = document.querySelector('#timeToWait');
    const inputbakerTimers = document.querySelector('#bakerTimers');

    inputTimeToWait.value = '';
    inputbakerTimers.value = '';
}