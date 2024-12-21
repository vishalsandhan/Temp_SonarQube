                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           let userScore = 0;
let compScore = 0;

let compScorePara = document.querySelector("#comp-score");
let userScorePara = document.querySelector("#user-score");

let instruction = document.querySelector(".instruction");
const choices = document.querySelectorAll(".choice");

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    var elements = document.querySelectorAll(".imgg");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.border = "none";
        elements[i].style.backgroundColor = "white";
    }
    btn.style.visibility = "hidden";
    instruction.innerText = "Play Your Move"
    instruction.style.backgroundColor = "#081b31"
})


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);

    let comp_img = document.querySelectorAll(".comp-img");
    comp_img[idx].style.backgroundColor = "orangered";
    comp_img[idx].style.border = "5px solid orangered";

    return options[idx];
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        // console.log("You Win!!");
        instruction.innerText = "You Win";
        instruction.style.backgroundColor = "Green";
        userScorePara.innerText = `${userScore}`;
    } else {
        compScore++;
        // console.log("You Lost!!")
        instruction.innerText = "You Lose";
        instruction.style.backgroundColor = "dARKRed";
        compScorePara.innerText = `${compScore}`;
    }
    btn.style.visibility = "visible";
}

const playGame = (userChoice) => {

    //*********** Bordering Part ************/
    let userstr = `#${userChoice}`;
    document.querySelector(userstr).style.backgroundColor = "orangered";
    // document.querySelector(userstr).style.backgroundColor="orangered";

    //***************************************/


    const compChoice = genComputerChoice();
    // console.log("comp choice = ",compChoice);

    if (userChoice === compChoice) {
        // console.log("draw Game!!");
        instruction.innerText = "Game Draw";
        instruction.style.backgroundColor = "#081b31";
        btn.style.visibility = "visible";


    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        choice.style.backgroundColor = "orangered";
        choice.style.border = "5px solid orangered";
        // console.log("choice was Clicked",userChoice);
        playGame(userChoice);
    });
});