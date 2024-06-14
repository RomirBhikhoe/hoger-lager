const dice1 = document.querySelector('.dice1-img');
const dice2 = document.querySelector('.dice2-img');
const dice3 = document.querySelector('.dice3-img');
const dice4 = document.querySelector('.dice4-img');
const higher = document.querySelector('.higher');
const lower = document.querySelector('.lower');
const roll = document.querySelector('.roll');
const yourpoint = document.querySelector('.yourpoint');
const computerpoint = document.querySelector('.computerpoint');
const winlose = document.querySelector('.winlose');
const showPopupButton = document.querySelector('.showPopup');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.close');


let diceOne, diceTwo, dicetre, dicefore;

let pointyour = 0;
let pointcomputer = 0;


// klik om voor de computer te rollen.
roll.addEventListener('click', function () {
    //random getal.
    diceOne = Math.floor((Math.random() * 6) + 1);
    diceTwo = Math.floor((Math.random() * 6) + 1);

    // de dice img laten zien op de scherm.
    dice1.src = "./img/dice-" + diceOne + ".png";
    dice2.src = "./img/dice-" + diceTwo + ".png";

    //de buttons aan zetten die je moet kliken en uit zetten die gebruikt is.
    roll.disabled = true;
    higher.disabled = false;
    lower.disabled = false;
});


// rollen voor jouw.
higher.addEventListener('click', function () {
    // random getal.
    dicetre = Math.floor((Math.random() * 6) + 1);
    dicefore = Math.floor((Math.random() * 6) + 1);

    // de dice img laten zien.
    dice3.src = "./img/dice-" + dicetre + ".png";
    dice4.src = "./img/dice-" + dicefore + ".png";

    // als jij wint.
    if (diceOne + diceTwo < dicetre + dicefore) {
        pointyour++;
        yourpoint.innerHTML = pointyour;
            // jouw punten op tellen voor jouw.
            alert ("Ronde gewonnen");
        // als de computer wint.
    } else if (diceOne + diceTwo > dicetre + dicefore) {
        pointcomputer++;
        computerpoint.innerHTML = pointcomputer;
            // punten op tellen van computer.
        alert ("Ronde verloren");
    // als het gelijk spel is.
    } else if (diceOne + diceTwo === dicetre + dicefore) {
        alert ('het is gelijkspel');
    };
    // als jij 10 punten heb gehaald.
    if (pointyour == 10) {
       
        // reset punten naar 0.
        pointcomputer = 0;
        computerpoint.innerHTML = pointcomputer;
        pointyour = 0;
        yourpoint.innerHTML = pointyour;
         // laten zien dat jij heb gewonnen.
        alert("Je hebt gewonnen");
    };

    // als de computer 10 punten heeft.
    if (pointcomputer == 10) {
        // reseten punten naar 0.
        pointcomputer = 0;
        computerpoint.innerHTML = pointcomputer;
        pointyour = 0;
        yourpoint.innerHTML = pointyour;
           // laten zien dat de computer heeft gewonnen.
           alert("Computer heeft gewonnnen");
    };

    // de buttons aan zetten die je moet gebruiken en uit zetten die je niet nodig heb.
    roll.disabled = false;
    higher.disabled = true;
    lower.disabled = true;

});

// rollen voor jouw.
lower.addEventListener("click", function () {
    // random getal.
    dicetre = Math.floor((Math.random() * 6) + 1);
    dicefore = Math.floor((Math.random() * 6) + 1);

    // de dice img laten zien.
    dice3.src = "./img/dice-" + dicetre + ".png";
    dice4.src = "./img/dice-" + dicefore + ".png";

    // als jij wint.
    if (diceOne + diceTwo > dicetre + dicefore) {
        pointyour++;
        yourpoint.innerHTML = pointyour;
            // jouw punten op tellen voor jouw.
            alert ("Ronde verloren");
    // als computer wint.
    } else if (diceOne + diceTwo < dicetre + dicefore) {
        pointcomputer++;
        computerpoint.innerHTML = pointcomputer;
            // punten op tellen van computer.
            alert ("Ronde verloren");
    // als het gelijk spel is.
    } else if (diceOne + diceTwo === dicetre + dicefore) {
        alert ('het is gelijkspel');
    };

    // als jij 10 punten heb gehaald.
    if (pointyour == 10) {
        // reseten punten naar 0.
        pointcomputer = 0;
        computerpoint.innerHTML = pointcomputer;
        pointyour = 0;
        yourpoint.innerHTML = pointyour;
        // laten zien dat jij heb gewonnen.
        alert("Je hebt gewonnen");
    };

    // als de computer 10 punten heb gehaald.
    if (pointcomputer == 10) {
        // reseten punten naar 0.
        pointcomputer = 0;
        computerpoint.innerHTML = pointcomputer;
        pointyour = 0;
        yourpoint.innerHTML = pointyour;
        // laten zien dat computer heeft gewonnen.
        alert("Computer heeft gewonnnen");
    }

    // de buttons aan zetten die je nodig heb en uit zetten die je niet nodig heb.
    roll.disabled = false;
    higher.disabled = true;
    lower.disabled = true;
});

// de buttons aan zetten die je nodig heb
higher.disabled = true;
lower.disabled = true;


// deze code laat de spel regels niet zien als je het spel open.
popup.style.display = 'none'

// de informatie popup laten zien
showPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});
// de informatie popup weg kliken
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});