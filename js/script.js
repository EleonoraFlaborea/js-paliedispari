/*
Palidroma
Chiedere all’utente di inserire una parola (con un prompt)
Creare una funzione per capire se la parola inserita è palindroma
Stampiamo il risultato in console

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. (con un prompt)
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto in console.


Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


BONUS
Se ne avete tempo e voglia, provate a:
raccogliere le informazioni dall'utente usando form, input, button in pagina invece che coi prompt.
Stampare i risultati in pagina, invece che in console
Buon lavoro e buon divertimento! 


//ESERCIZIO: Palindroma

// ? Chiedere all’utente di inserire una parola (con un prompt)
// ? Creare una funzione per capire se la parola inserita è palindroma
// ? Stampiamo il risultato in console

//1 recupero elementi dalla pagina
const form = document.querySelector('#palindroma form')
const wordField = document.querySelector('#palindroma input')
const resultElement = document.querySelector('#palindroma .result')


//2 recupera con il click la parola
form.addEventListener('submit', function(event){
    event.preventDefault();
    const text = inputField.value.trim();

    const message = isPalindrome(text)? `La parola ${text} è palindroma`: `La parola ${text} non è palindroma`

    resultElement.innerText = message;
})
   
//3 funzione per invertire parola

function isPalindrome(word){
    word = word.toLowerCase();
    const reversedWord = word.split('').reverse().join('');
    return reversedWord === word;
}

*/

//ESERCIZIO: Pari e dispari

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. (con un prompt)
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto in console.*/

//1 recupero elementi dalla pagina
const form = document.querySelector('#pariodispari form')
const inputField = document.querySelector('#pariodispari input')
const resultElement = document.querySelector('#pariodispari .result')
const selectField = document.querySelector('#pariodispari select')

form.addEventListener('submit', function(event){
    event.preventDefault();
    const userNumber = parseInt(inputField.value)
    const userChoice = selectField.value;

    //! validazione
    if(isNaN(userNumber)|| userNumber < 1 || userNumber > 5){
        alert('Devi scegliere un numero da 1 a 5');
        return;
    }

    if(userChoice !== 'odd' && userChoice !== 'even'){
        alert('Devi scegliere pri o dispari');
        return;
    }

    const cpuNumber = getRandomNumber(1,5);
    console.log(cpuNumber)


    const sum = cpuNumber + userNumber;
    console.log(sum)


    const ricghtChoice = isEven(sum) ? 'even' : 'odd';

    const winner = userChoice === ricghtChoice ? 'User' : 'CPU';

    resultElement.innerText = 'The winner is: ' + winner;

   console.log(userNumber, userChoice)
})

// #FUNZIONI

function getRandomNumber(min, max){
    const randomNumber = Mathfloor(Math.random() * (max +1 - min))+min;
    return randomNumber;
}

function isEven(num){
    return num % 2 === 0;
}