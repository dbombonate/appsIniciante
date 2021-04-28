/*
 * Receber as fornadas do dia - OK;
 * Pegar horário da próxima fornada - OK;
 * Comparar com a hora atual - OK;
 * Criar timer regressivo até a próxima fornada - OK;
 * Tocar alarme quando fornada pronta por 5s e a cada 30s por 5 minutos
 * Gravar no campo última fornada e iniciar timer novamente.
 * */

function bakerTimer() {
    // Descomentar linha abaixo para iniciar o cronometro na página.

    window.addEventListener('load', iniciaCron);
    
    // Array with hour and minute for bread batches
    const batches = ["07:00","08:45","10:30","12:15","14:00","15:45","17:30","19:15","21:28"];
    const initHour = new Date();
	
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

    // Function to determine the actual batch
    function actualBatch(initHour){
        let bakedBread = [];
        for (let i = 0; i < batches.length; i++) {
            const element = batches[i];
            // Split de element to get the time to compare with the initHour parameter
            const arrayElement = element.split(':');
            let batchHour = new Date();
            if (new Date(batchHour.getFullYear(), batchHour.getMonth(), batchHour.getDate(), arrayElement[0], arrayElement[1]) < initHour){
                bakedBread.push(arrayElement[0]);
            }
            
        }
        return bakedBread.length;
    }

    // Function to determine seconds to the Next Batch of Bread
    function defineTimeToNextBatch(idNextBatch){
        const nextBatch = batches[idNextBatch];
        if(!nextBatch){
            
            lastBatchBread(idNextBatch);
            return 0;
        }
        const actualHour = new Date();
        const arrayNextBatch = nextBatch.split(':');
        lastBatchBread(idNextBatch);
        return (actualHour - new Date(actualHour.getFullYear(), actualHour.getMonth(), actualHour.getDate(),arrayNextBatch[0],arrayNextBatch[1])) / 1000;
    }

    // Function to inform last batch of bread
    function lastBatchBread(idLastBatch){
        const lastBakedBread = document.querySelector('#lastBakedBread');
        if (idLastBatch <= batches.length){
            lastBakedBread.innerHTML = batches[idLastBatch-1];
        } else {
            lastBakedBread.innerHTML = '<p> Já encerramos as fornadas por hoje! <br> Agradecemos a preferencia! </p>'
        }

    };

    // Function to verify if seconds is zero and play modal
    function checkSeconds(time){
        if (time < 1 && time >= 0) {
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.modal').style.display = 'flex';
            //fundo.style.backgroundColor = 'yellow';
            limpaCron();
            pausarCron();
            setTimeout(() => {
                document.location.reload();
            }, timeToWait);
        }
    }
  
    // Variable Definitions
    const clock = document.querySelector('#timeToNextBread');
    let timeToWait = 2 * 60 * 1000; // 2 minutes
    const batchesOk = actualBatch(initHour.getTime());
	let seconds = Math.abs(defineTimeToNextBatch(batchesOk));
	let timer;

    // Function for init timer
	function iniciaCron() {
        if (!seconds) {
            clock.innerHTML = "<h1>Desculpe! Já encerramos a produção por hoje!</h1>"
            return
        }
		timer = setInterval(() => {
			seconds--;
			clock.innerHTML = getHourFromSeconds(seconds);
            checkSeconds(seconds);
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
		clock.innerHTML = '00:00:00';
		seconds = 0;
	}
}

bakerTimer();