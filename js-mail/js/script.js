// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
// stampa un messaggio appropriato sull’esito del controllo.

// genero un array di email 
const mailList = ["mario.rossi@gmail.com", "mario.verdi@gmail.com", "giorgio.bianchi@libero.it", "federico.neri@hotmail.com", "andrea.grandi@google.com"];

// memorizzo il bottone 
const buttonElement = document.querySelector("#check-mail");

buttonElement.addEventListener("click", 
    function() {
        
        // memorizzo in una variabile la mail che ha inserito l'utente
        const userMail = document.getElementById("mail").value;

        // utilizzo una variabile booleana che per controllare se userMail è presente
        let isMailPresent = false; 

        // controllo nel mio array se userMail è presente 
        for(let i = 0; i < mailList.length; i++) {
            if(mailList[i] == userMail) {
                isMailPresent = true;
            }
        }
        
        if(isMailPresent){
            document.getElementById("result").innerHTML = "Sei registrato!";
            document.getElementById("result").className = "success";
        } else {
            document.getElementById("result").innerHTML = "Mi dispiace ma non sei registrato o la mail inserita non è corretta";
            document.getElementById("result").className = "error";
        }
    }
)