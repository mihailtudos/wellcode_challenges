const buttonStart = document.getElementById('number');
const userInputError = document.getElementById('numberError');
const playGround = document.getElementById('playGround');
const submitButton = document.getElementById('submitButton');
let hiddenNumber;

document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault()
  });

const checkWinner = function() {
    const magic_number = Math.floor(Math.random() * hiddenNumber);
    console.log(magic_number);
    console.log(this.id);
    if (parseInt(this.id) == magic_number) {
        let startNewGame = confirm('Congratulations you won! Do you want to play more?');
        if (!startNewGame) {
            location.reload();
        }
    } else {
        let startNewGame = confirm('You\'ve lost this time! Do you want to play more?');
        if (!startNewGame) {
            location.reload();
        }
    }
}

function playGame() {
    let numberOfButtons = buttonStart.value;
    if (numberOfButtons > 1 && numberOfButtons <= 10) {
        submitButton.disabled = true;
        hiddenNumber = numberOfButtons;
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
        userInputError.appendChild(document.createTextNode('Please, enter a valide number from 1 to 10'));
        userInputError.style.color = 'red';
        setTimeout(function() {
            location.reload();
        }, 1000)
    }
}

