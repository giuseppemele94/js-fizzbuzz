/* Scrivi un programma che stampi i numeri da 1 a 100,
Per i multipli di 3 stampi “Fizz” al posto del numero 
Per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

// Ciclo per stampare i numeri da 1  a 100 
 for (let x = 1; x <= 100; x++) {

    // multipli di 3 e di 5
    //controllo prima questo caso ( 3 e 5 insieme) , 
    // altrimenti verrebbe preso solo dal 3 o dal 5
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("FizzBuzz");

        //multipli di 3
    } else if (x % 3 === 0) {
        console.log("Fizz");

        //multipli di 5
    } else if (x % 5 === 0) {
        console.log("Buzz");

        //altrimenti stampa il numero 
    } else {
        console.log(x);
    }

}