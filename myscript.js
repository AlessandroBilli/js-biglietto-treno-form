'use script'

const nomeInput = document.getElementById('nomeInput');
const distanzaInput = document.getElementById('distanzaInput');
const confermaButton = document.getElementById('confermaButton');
const annullaButton = document.getElementById ('annullaButton');
const elementoDaNascondere = document.getElementById('elementoDaNascondere');
elementoDaNascondere.style.display = 'none';




confermaButton.addEventListener('click', function () {

    elementoDaNascondere.style.display = 'block';

    const nome = nomeInput.value;
    console.log('Nome e Cognome passeggero:', nome)

    const età = etàInput.value;
    console.log ('Età passeggero:', età)

    const distanza = Number(distanzaInput.value);
    console.log('Distanza passeggero:', distanza);

    document.getElementById('risultatoNome').textContent =  nome;
    


    const prezzo = distanza * 0.21;
    console.log('Prezzo del biglietto:', prezzo);
    document.getElementById('risultatoDistanza').textContent =  prezzo;

    const numeroCasualeIntero = Math.floor(Math.random() * 10) + 1;
    console.log(numeroCasualeIntero);
    document.getElementById('carrozzaNumero').textContent =  numeroCasualeIntero;

    const numeroCasualeInteroCinqueCifre = Math.floor(Math.random() * 10000) + 10000;
    console.log(numeroCasualeInteroCinqueCifre);
    document.getElementById('codiceCP').textContent =  numeroCasualeInteroCinqueCifre;

    

    const percentualeVenti = 20;

    const percentualeQuaranta = 40;

    if (età < 18) {

        const sconto = (prezzo * percentualeVenti) / 100;
        console.log('Sconto del 20%:', sconto);
        const prezzoScontato = prezzo - sconto;
        console.log('Prezzo con lo sconto:', prezzoScontato.toFixed(2));
        document.getElementById('risultatoDistanza').textContent =  prezzoScontato.toFixed(2);
    }

    if (età > 65) {

        const sconto = (prezzo * percentualeQuaranta) / 100;
        console.log('Sconto del 40%:', sconto);
        const prezzoScontato = prezzo - sconto;
        console.log('Prezzo con lo sconto:', prezzoScontato.toFixed(2));
        document.getElementById('risultatoDistanza').textContent =  prezzoScontato.toFixed(2);
    }




    


});
annullaButton.addEventListener('click', function() {

    elementoDaNascondere.style.display = 'none';

});






