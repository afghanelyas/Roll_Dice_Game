
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
  // to store
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showDisplayButton(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

rollBtn.addEventListener("click", function(){
    const rondomNumber = Math.floor(Math.random() * 6) + 1
    

    if(player1Turn)
    {
        player1Score += rondomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = rondomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Computer"


    }else{
        player2Score += rondomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = rondomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "You"
    }

    // if(player1Turn){
    //     player1Turn = false
    // }else{
    //     player1Turn = true
    // }

    if(player1Score >= 20){
        message.textContent = "you won!"
        showDisplayButton()
    }else if(player2Score >= 20){
        message.textContent = "computer won !"
        showDisplayButton()
    }

    player1Turn = !player1Turn;
})

resetBtn.addEventListener("click", function(){
    reset()
})

function reset(){
    
    message.textContent = "player 1 turn"
    player1Scoreboard.textContent = 0 
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Score = 0
    player2Score = 0 
    player1Turn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}