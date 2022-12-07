const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll ('button')
let yourChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.id 
    yourChoiceDisplay.innerHTML = yourChoice
    generateComputerChoice()
    getResult ()
}))

function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random () * 3) + 1 // or you can use possibleChoices.lenght
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'scissor'
    }

    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
    if (computerChoice === yourChoice) {
        result = 'It is a draw!'
    }
    if (computerChoice === 'rock' && yourChoice === 'paper') {
        result = 'You Win!'
    }
    if (computerChoice === 'rock' && yourChoice === 'scissor') {
        result = 'You Lose!'
    }
    if (computerChoice === 'paper' && yourChoice === 'scissor') {
        result = 'You Win!'
    }
    if (computerChoice === 'paper' && yourChoice === 'rock') {
        results = 'You Lose!'
    }
    if (computerChoice === 'scissor' && yourChoice === 'rock') {
        result = 'You Win!'
    }
    if (computerChoice === 'scissor' && yourChoice === 'paper') {
        result = 'You Lose!'
    }
    resultDisplay.innerHTML = result
}   
   
    