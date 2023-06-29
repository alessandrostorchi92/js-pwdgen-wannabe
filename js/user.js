const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const favouriteColour = prompt("Inserisci il tuo colore preferito");
// const userAge = prompt("Inserisci la tua età");
const fullName = `${firstName} ${lastName}}`

document.getElementById("welcome_title").innerHTML = `Benvenuto ${firstName} ${lastName}!!!`
document.getElementById("my_name").innerHTML = `${firstName}`
document.getElementById("my_surname").innerHTML = `${lastName}`
document.getElementById("my_favourite-colour").innerHTML = `${favouriteColour}`
document.getElementById("my_psw").innerHTML = firstName + lastName + favouriteColour + 21