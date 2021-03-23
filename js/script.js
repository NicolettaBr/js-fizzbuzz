//Scrivi un programma che stampi i numeri da 1 a 100
//per i multipli di 3 stampi “Fizz” al posto del numero
//per i multipli di 5 stampi Buzz
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var messaggio;

//crea ciclo che contenga numeri da 1 a 100
for (var i = 1; i < 101; i++){
    console.log(i);

    if(i % 3 == 0 ){
       messaggio = 'fizz';
       console.log(messaggio);
      
    }
}



