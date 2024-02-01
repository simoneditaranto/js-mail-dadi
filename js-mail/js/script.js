// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
// stampa un messaggio appropriato sull’esito del controllo.

// genero un array di email 
const mailList = ["mario.rossi@gmail.com", "mario.verdi@gmail.com", "giorgio.bianchi@libero.it", "federico.neri@hotmail.com", "andrea.grandi@google.com"];

// memorizzo il bottone 
const buttonElement = document.querySelector("#check-mail");

// creo un bottone in caso l'utente volesse registrarsi
const newElement = document.createElement("button");

// memorizzo in una variabile la mail che ha inserito l'utente
let userMail;

// utilizzo una variabile booleana che per controllare se userMail è presente
let isMailPresent = false;

buttonElement.addEventListener("click", 
    function() {

        // rimuovo il bottone che compare se la mail non esiste e mi voglio registrare
        newElement.remove();

        const userMailControl = document.getElementById("mail").value;

        // controllo nel mio array se userMail è presente 
        isMailPresent = false;
        for(let i = 0; i < mailList.length; i++) {
            if(mailList[i] == userMailControl) {
                isMailPresent = true;
            }
        }
        userMail = userMailControl;
        console.log(userMail);

        if(isMailPresent){
            document.getElementById("result").innerHTML = "Sei registrato!";
            document.getElementById("result").className = "success";
        } else {
            document.getElementById("result").innerHTML = "Mi dispiace ma non sei registrato o la mail inserita non è corretta";
            document.getElementById("result").className = "error";

            
            newElement.innerHTML = "Vuoi registrarti?";
            document.querySelector("#register").append(newElement);
        }

    }
)

// bottone che compare nel caso la mail inserita non esiste, chiede all'utente se vuole registrarsi e aggiunge la nuova mail alla lista
newElement.addEventListener("click",
    function() {

        // elimino il contenuto del controllo 
        document.getElementById("result").innerHTML = " ";

        // controllo se la mail che sto inserendo è già esistente, altrimenti aggiungerebbe la nuova mail ad ogni click del bottone
        for(let i = 0; i < mailList.length; i++) {
            if(mailList[i] == userMail) {
                isMailPresent = true;
            }
        }

        // se non è presente aggiungo la mail alla mia lista
        if(!isMailPresent) {
            mailList.push(userMail);
        }

        document.getElementById("result").innerHTML = "Registrato con successo!";
        
        document.getElementById("result").className = "registered";
    }
)

