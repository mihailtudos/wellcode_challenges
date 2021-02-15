const buttonStart = document.getElementById('number');
const userInputError = document.getElementById('numberError');
const playGround = document.getElementById('playGround');
const submitButton = document.getElementById('submitButton');
const playerName = document.getElementById('playerName');
const playerDetails = document.getElementById('player');
const gameDetails = document.getElementsByClassName('gameDetails');
const choiceFeedback = document.getElementById('choiceFeedback');
const lifes = document.querySelectorAll('#gamePlayerDetails i');

let hiddenNumber, count = 0;

document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault()
  });

function removeLife(i) {
    lifes[i].style.color = 'red';
}

const checkWinner = function() {
    if(count < 3) {
        const magic_number = Math.floor(Math.random() * hiddenNumber);
        console.log(this.id, magic_number);
        removeLife(count);
        count++;
    } 
    
    if (count === 3) {
        modal.style.display = "block";
    }
}

function playGame() {
    const numberOfButtons = buttonStart.value;
    const name = playerName.value;
    if (numberOfButtons > 1 && numberOfButtons <= 10 && name !== '') {
        submitButton.disabled = true;
        hiddenNumber = numberOfButtons;
        playerDetails.innerHTML = `Player: ${playerName.value}`;
        gameDetails[0].style.display = 'flex';
        for (let i = 0; i < numberOfButtons; i++) {
            let button = document.createElement('button');
            button.appendChild(document.createTextNode("Choose me!"));
            button.classList.add('nice_button');
            button.setAttribute('id', 'btn_number');
            button.id = i;
            playGround.appendChild(button);
            document.getElementById(i).onclick = checkWinner;
        }
    } else {
        userInputError.innerHTML = '';
        if (name === '') {
            userInputError.appendChild(document.createTextNode('Please, enter your name'));
        } else {
            userInputError.appendChild(document.createTextNode('Please, enter a valide number from 1 to 10'));
        }
        userInputError.style.color = 'red';
        setTimeout( () => {
            userInputError.innerHTML = '';
        }, 1000);
    }
}



// modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}