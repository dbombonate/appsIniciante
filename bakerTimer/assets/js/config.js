const addTime = document.querySelector('#addTime');
const bakerTimers = document.querySelector('#bakerTimers');
const addedTime = document.querySelector('#addedTime');

let bakerTimersArray = [];
let bakersTimer;

addTime.addEventListener('click', (e) => {
    e.preventDefault();
    const timeToAdd = bakerTimers.value;
    if (timeToAdd === '') return alert("Informe um horário para adicionar.")
    bakersTimer = addTimeArray(timeToAdd);
})

document.addEventListener('submit', (e) => {
    
    const timeToWait = document.querySelector('#timeToWait').value;
    const bakerTimers = document.querySelector('#bakerTimers').value;
    
    e.preventDefault();
    validaInputs(timeToWait, bakerTimers);

    if (bakerTimers){
        addTimeArray(bakerTimers);
    }

    localStorage.setItem('time', timeToWait);
    localStorage.setItem('bakersTimers', bakersTimer);

    formReset();
    
})

function validaInputs(timeToWait, bakerTimers){
    if (!timeToWait || !bakerTimers) return alert('Informe valores válidos nos campos!');
}

function formReset(){
    alert('Dados Gravados com sucesso!');
    const inputTimeToWait = document.querySelector('#timeToWait');
    const inputbakerTimers = document.querySelector('#bakerTimers');

    inputTimeToWait.value = '';
    inputbakerTimers.value = '';
}

function addTimeArray(value){
    bakerTimersArray.push(value);
    bakerTimers.value = '';
    bakerTimers.focus();
    addTimeInfo(bakerTimersArray);
    return bakerTimersArray;
}

function addTimeInfo(val){
    addedTime.innerHTML = `<p class="text-center">Horários cadastrados: ${val}</p>`
}