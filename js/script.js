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
*/

//ESERCIZIO: Palindroma

// ? Chiedere all’utente di inserire una parola (con un prompt)
// ? Creare una funzione per capire se la parola inserita è palindroma
// ? Stampiamo il risultato in console

//1 recupero elementi dalla pagina
const button = document. getElementById('button')
const wordField = document. getElementById('input')


//2 recupera con il click la parola
button.addEventListener('click', function(){
    const wordValue = wordField.value.trim();
    console.log(wordValue);
})
   
//3 funzione per invertire parola



function reverseText(text){
    let reversedText = '';

    for (let i = text.lenght -1; i >= 0; i--){
        reversedText += text [i];
        console.log(text[i])
    }

    

    return reversedText;
}


const result = reverseText('ciao')
console.log(result)
//invertire parola ricevuta

//4 funzione per capire se la parola è palindroma
function isPalindrome (){
   

    //se la parola ricevuta è uguale a quella rovesciata

    //allora è palindroma, sennò non lo è
}



//4 stampa in pagina

/*
let wordValue = '';
//2 recupera con il click la parola
button.addEventListener('click', function (){
    
    //recupero elementi dal value
    let wordValue = wordField.value;
    console.log(wordValue);
})
console.log(wordValue);
*/


//ESERCIZIO: Pari e dispari

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. (con un prompt)
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto in console.*/



