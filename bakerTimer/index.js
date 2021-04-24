/*
 * Pegar horário da próxima fornada
 * Comparar com a hora atual
 *
 * Criar timer regressivo até a próxima fornada
 * Tocar alarme quando fornada pronta por 5s e a cada 30s por 2 minutos
 * Gravar no campo última fornada e iniciar timer novamente.
 * */

function cronometro() {
    // Descomentar linha abaixo para iniciar o cronometro na página.

    window.addEventListener('load', iniciaCron);
	
    // Função de formatação dos segundos com base na data 0
	function getHourFromSeconds(seconds) {
		const data = new Date(seconds * 1000);
		return data.toLocaleTimeString('pt-br', {
			hour12: false,
			timeZone: 'UTC'
		});
	}

    // Function to next Batch with base in previous Batch
    function getNextBatch(idLastBatch){
        return idLastBatch++
    };

    // Function to determine seconds to the Next Batch of Bread
    function defineTimeToNextBatch(idNextBatch){
        const nextBatch = batches[idNextBatch];
        const actualHour = new Date();
        const arrayNextBatch = nextBatch.split(':');
        lastBatchBread(idNextBatch);
        return (actualHour - new Date(actualHour.getFullYear(), actualHour.getMonth(), actualHour.getDate(),arrayNextBatch[0],arrayNextBatch[1])) / 1000;
    }

    // Function to inform last batch of bread
    function lastBatchBread(idLastBatch){
        const lastBakedBread = document.querySelector('#lastBakedBread');
        lastBakedBread.innerHTML = batches[idLastBatch-1];
    };
    
    // Array with hour and minute for bread batches
    const batches = ["07:00","08:45","10:30","12:15","14:00","15:45","17:30","19:15","21:50"];
  
    // Variable Definitions
    const clock = document.querySelector('#timeToNextBread');
    let timeToWait = 5 * 60 * 1000; // 5 minutes
	let seconds = Math.abs(defineTimeToNextBatch(4));
	let timer;

    // Function for init timer
	function iniciaCron() {
		timer = setInterval(() => {
			seconds--;
			clock.innerHTML = getHourFromSeconds(seconds);
		}, 1000);
	}

    // Function for pause timer
	function pausarCron() {
		const pausaTimer = setTimeout(() => {
			clearInterval(timer);
		}, 0);
	}

    // Function for clean timer
	function limpaCron() {
		relogio.innerHTML = '00:00:00';
		seconds = 0;
	}
}

cronometro();