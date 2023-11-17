// 1k, 2k, 4k, 8k, 16k, 32k, 64k, 125k, 250k, 500k, 1million
// Game modelled after who wants to be a millionare 
// TEN questions in increasing difficulty
// TWO lifelines being used ONCE - 50/50, Phone a Friend
// You can start cashing out after 16k (before every Q)
// If you get the answer wrong after question 5 you get just 1k pity prize
// If you win, some kind of Hooplah for 1 million




const game = (function () {
  let count = 0;
  let Question = function (question, answers, rightAnswer) {
    this.question = question;
    this.answers = answers;
    this.rightAnswer = rightAnswer;

  };
  //creating method for all Question 
  Question.prototype.askQuestion = function () {
    console.log(this.question);

    this.answers.forEach(function (item, index) {
      console.log(`${index}) ${item}`);
    });
  };

  Question.prototype.sayAnswer = function (answer) {
    if (answer === this.rightAnswer) {
      console.log("Great! Correct answer");
      count++;
      console.log(`Your score: ${count}`);
    } else {
      console.log("Wrong answer");
      count--;
      console.log(`Your score: ${count}`);
    }
  };

  //creating question using constructor
  let question1 = new Question(
    "What year was the very first model of the iPhone released?",
    ["1998", "2002", "2007", "2015"],
    "2"
  );

  let question2 = new Question(
    "What’s the shortcut for the “copy” function on most computers?",
    ["ctrl c", "ctrl v", "c + v", "v + c"],
    "1"
  );

  let question3 = new Question(
    "What is often seen as the smallest unit of memory?",
    ["megabyte", "byte", "kilobyte", "superbyte"],
    "2"
  );

  //putting all questions in the array
  let questionsSet = [question1, question2, question3];

  function playGame() {
    // choosing one random question, print it out on console with the answer options
    //every question needs to have a number
    //random question is a question by random number
    let randomQuestion = Math.floor(Math.random() * questionsSet.length);

    questionsSet[randomQuestion].askQuestion();
    //using promnt to ask a question
    let answer = prompt(" put the number of correct answer");

    questionsSet[randomQuestion].sayAnswer(answer);

    if (answer !== "exit" && answer !== null) {
      playGame();
    }
  }
  playGame();
})();

/*
// 1k, 2k, 4k, 8k, 16k, 32k, 64k, 125k, 250k, 500k, 1million
// Game modelled after who wants to be a millionare 
// TEN questions in increasing difficulty
// TWO lifelines being used ONCE - 50/50, Phone a Friend
// You can start cashing out after 16k (before every Q)
// If you get the answer wrong after question 5 you get just 1k pity prize
// If you win, some kind of Hooplah for 1 million


function game() {
    let count = 0;
    class Question {
        constructor(question, answers, rightAnswer, levelDifficulty, value) {
            this.question = question;
            this.answers = answers;
            this.rightAnswer = rightAnswer;
            this.levelDifficulty = levelDifficulty;
            this.value = value
        }
        askQuestion() {
            console.log(this.question);

            this.answers.forEach(function (item, index) {
                console.log(`${index}) ${item}`);
            });
        };
        sayAnswer(answer) {
            if (answer === this.rightAnswer) {
                console.log("Great! Correct answer");
                if (this.levelDifficulty < 3) {
                    count = count + 1000;
                    this.value = count;
                    console.log(`Your score: ${count}`);
                    console.log(`You won: $ ${this.value}`);
                } else {
                    count = count * 2;
                    this.value = count
                    console.log(`Your score: ${count}`);
                    console.log(`You won: $ ${this.value}`);
                }

            } else {
                this.finishThegame()

            }
        };
        finishThegame() {

            console.log("Wrong answer");
            if (this.levelDifficulty > 5) {
                count = 1000;
                console.log("You still can keep 1000")
            }
        }
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

    function playGame() {
        let greeting = prompt("Let's play!")
        if (greeting !== "exit" && greeting !== null) {
            for (let i = 0; i < questionsSet.length; i++) {
                //chosing question
                questionsSet[i].askQuestion();
                //using promnt to get the answer
                let answer = prompt(" put the number of correct answer");
                questionsSet[i].sayAnswer(answer);
            }

            console.log("You won!!!!!!!!!!!")
        } else {
            console.log("Thank you for coming")
        }
        // choosing one random question, print it out on console with the answer options
        //every question needs to have a number
        //random question is a question by random number
    }
    playGame();
};

game();*/