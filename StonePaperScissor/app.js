let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
//Sabhi div choices mein aa jayegee

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock, paper, scissor
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "GAME DRAW!, PLAY AGAIN.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! Your Choice: ${userChoice} beats Computer Choice: ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE! Computer Choice: ${compChoice} beats Your choice: ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User Choice = "+userChoice);
    //Generate the Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = " +compChoice);
    if(userChoice === compChoice){
       //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
            //userChoice = rock hai toh computer ya toh scissors choose krega ya toh paper
            //agr paper choose krege toh userWin ki value false ho jaygei
            //agr scissors choose krega toh userWin true hi rhega
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}



choices.forEach((choice) => { // ab ek ek krke choice nikal kr un pr click event lga rhe h
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        //console.log("Choice was Clicked", userChoice);
        playGame(userChoice);
    });
});