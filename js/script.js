// * DATI UTENTE
let firstName = prompt("What's your First Name?");

let lastName = prompt("And your Last Name is...?");

let favColor = prompt("Ok, we are almost done... I just need to know your favorite Color.");

// * ELABORAZIONE PASSWORD
document.getElementById('password').innerHTML = firstName + lastName + favColor + '21';