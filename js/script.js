// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// memorizzo il bottone che genera un numero casuale 
// per l'utente 
const buttonElement = document.querySelector("#generator");
buttonElement.addEventListener("click",
    // implemento tutto qui dentro così quando viene premuto
    // il bottone viene generato nuovamente anche il numero
    // casuale del computer
    function() {

        // salvo in una variabile il numero generato dal computer
        const pcNumber = Math.floor(Math.random() * 6 + 1);
        document.getElementById("pc-number").innerHTML = "Numero generato per il computer: " + pcNumber;

        // genero un numero casuale da 1 a 6
        const userNumber = Math.floor(Math.random() * 6 + 1);
        document.getElementById("user-number").innerHTML = "Numero generato per l'utente: " + userNumber;

        // controllo chi ha vinto
        if(pcNumber > userNumber) {
            document.getElementById("result").innerHTML = "Hai perso!";
        } else if(pcNumber < userNumber){
            document.getElementById("result").innerHTML = "Hai vinto!";
        } else {
            document.getElementById("result").innerHTML = "Hai pareggiato!";
        }
    }
)

