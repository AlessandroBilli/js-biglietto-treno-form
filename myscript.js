'use script'

const nomeInput = document.getElementById('nomeInput');
const distanzaInput = document.getElementById('distanzaInput');
const confermaButton = document.getElementById('confermaButton');

confermaButton.addEventListener('click', function () {
    const nome = nomeInput.value;
    console.log('Nome e Cognome passeggero:', nome)

    const età = etàInput.value;
    console.log ('Età passeggero:', età)

    const distanza = Number(distanzaInput.value);
    console.log('Distanza passeggero:', distanza);

    document.getElementById('risultatoNome').textContent = 'Nome passeggero: ' + nome;
    


    const prezzo = distanza * 0.21;
    console.log('Prezzo del biglietto:', prezzo);
    document.getElementById('risultatoDistanza').textContent = 'Prezzo: ' + prezzo;

    const numeroCasualeIntero = Math.floor(Math.random() * 10) + 1;
    console.log(numeroCasualeIntero);
    document.getElementById('carrozzaNumero').textContent = 'Numero Carrozza: ' + numeroCasualeIntero;

    const numeroCasualeInteroCinqueCifre = Math.floor(Math.random() * 10000) + 10000;
    console.log(numeroCasualeInteroCinqueCifre);
    document.getElementById('codiceCP').textContent = 'Numero Carrozza: ' + numeroCasualeInteroCinqueCifre;

    

    const percentualeVenti = 20;

    const percentualeQuaranta = 40;

    if (età < 18) {

        const sconto = (prezzo * percentualeVenti) / 100;
        console.log('Sconto del 20%:', sconto);
        const prezzoScontato = prezzo - sconto;
        console.log('Prezzo con lo sconto:', prezzoScontato.toFixed(2));
        document.getElementById('risultatoDistanza').textContent = 'Prezzo: ' + prezzoScontato.toFixed(2);
    }

    if (età > 65) {

        const sconto = (prezzo * percentualeQuaranta) / 100;
        console.log('Sconto del 40%:', sconto);
        const prezzoScontato = prezzo - sconto;
        console.log('Prezzo con lo sconto:', prezzoScontato.toFixed(2));
        document.getElementById('risultatoDistanza').textContent = 'Prezzo: ' + prezzoScontato.toFixed(2);
    }




    


});







