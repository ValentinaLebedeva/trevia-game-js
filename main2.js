// 1k, 2k, 4k, 8k, 16k, 32k, 64k, 125k, 250k, 500k, 1million
// Game modelled after who wants to be a millionare 
// TEN questions in increasing difficulty
// TWO lifelines being used ONCE - 50/50, Phone a Friend
// You can start cashing out after 16k (before every Q)
// If you get the answer wrong after question 5 you get just 1k pity prize
// If you win, some kind of Hooplah for 1 million

// the game 
function playGame() {
    let greeting = confirm("Let's play!")
    if (!greeting) {
        // end the game if presses "cancel"
        endThegame()
    } else {
        //run the ganme
        questionsAsk()
    }
}
// end the game if presses "cancel"
function endThegame() {
    return alert("Thank you for coming");
}

// finish the game if the wrong ansfer, offer to play again
function gameOver() {
    const play = confirm("Game over! Try again?");
    if (play) {
        playGame();
    }
    else {
        // end the game if presses "cancel"
        endThegame();
    }
}

// function running to game
function questionsAsk() {
    let preview = confirm("first question. Are you ready?");
    if (preview) {
        //using for loop to go from easier question to difficult but its level
        for (let i = 0; i < questionsSet.length; i++) {

            //chosing question
            questionsSet[i].askQuestion();
            //using promnt to get the answer
            let answer = prompt(" put the number of correct answer");
            if (answer !== "exit" && answer !== null) {
                questionsSet[i].sayAnswer(answer);
            } else {
                // end the game if presses "cancel"
                endThegame()
            }

        }
        //if the player finished the game
        prompt("Yoooooooo you won! Play again?")

    } else {
        // end the game if presses "cancel"
        endThegame()
    }


}

let count = 0;
class Question {
    constructor(question, answers, rightAnswer, levelDifficulty) {
        this.question = question;
        this.answers = answers;
        this.rightAnswer = rightAnswer;
        this.levelDifficulty = levelDifficulty;
    }
    askQuestion() {
        console.log(this.question);

        this.answers.forEach(function (item, index) {
            console.log(`${index}) ${item}`);
        });
    };

    // function comparing given answer and correct answer
    sayAnswer(answer) {
        if (answer === this.rightAnswer) {
            console.log("Great! Correct answer");
            if (this.levelDifficulty < 3) {
                //count is changin by level of difficulties
                count = count + 1000;
                console.log(`Your score: ${count}`);
            } else {
                count = count * 2;
                console.log(`Your score: ${count}`);
            }

        } else {
            //if the player lose
            if (this.levelDifficulty >= 5) {
                //if the player lose after or on question 5
                alert("Oh no, You lost. You still can keep 1000")
                console.log("You still can keep 1000")
            }
            alert("Oh no, You lost.")

            gameOver()
        }
    };

}
//creating question using constructor
const question1 = new Question(
    "What year was the very first model of the iPhone released?",
    ["1998", "2002", "2007", "2015"],
    "2",
    1,
);

const question2 = new Question(
    "What’s the shortcut for the “copy” function on most computers?",
    ["ctrl c", "ctrl v", "c + v", "v + c"],
    "0",
    2,
);

const question3 = new Question(
    "What is often seen as the smallest unit of memory?",
    ["megabyte", "byte", "kilobyte", "superbyte"],
    "2",
    3
);

const question4 = new Question(
    "How long is an Olympic swimming pool (in meters)?",
    ["100 meters", "75 meters", "50 meters", "80 meters"],
    "2",
    4
);
const question5 = new Question(
    "random question with answer 5",
    ["1", "2", "4", "5"],
    "3",
    5,

);
const question6 = new Question(
    "another random question with answer 5",
    ["1", "2", "4", "5"],
    "3",
    6,

);

//putting all questions in the array
const questionsSet = [question1, question2, question3, question4, question5, question6];



playGame();
