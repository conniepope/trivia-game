//VARIABLES
var timer;
var correctAnswers;
var incorrectAnswers;
// questions with answer options (as radio buttons?) with only one being able to be selected
var questions = {
    q1: {
        q: "This artist is sometimes credited with the inventions of the parachute, helicopter, and tank.",
        a1: "Salvador Dali",
        a2: "Pablo Picasso",
        a3: "Leonardo da Vinci",
        a4: "Vincent Van Gogh",
    },
    q2: {
        q: "Who painted 'The Persistence of Memory', an urrealistic image of soft, melting pocket watches?"  ,
        a1: "Rembrandt",
        a2: "Salvador Dali",
        a3: "Andy Warhol",
        a4: "Michelangelo" ,
    }
}

// START SCREEN

    // show start button

    correctAnswers = 0;
    incorrectAnswers = 0;


    //once the start button is clicked  

// GAME PLAY

    // hide start button

    // QUESTION SCREEN/TIMER

        // display timer & first question w/answers

        // timer will count down from 20 seconds

        //when timer reachs 0,

    // ANSWER SCREEN

        //if correct answer,
            correctAnswers++;
            // display congrats for 5 seconds
            // and display correct answer,
        // if incorrect answer,
            incorrectAnswers++;
            //display wrong for 5 seconds
            // and display correct answer,

        // if no answer,
            //display 'time has run out'
            incorrectAnswers++
            // display correct answer

    //next question with answer options displays after correct answer is displayed for 5 seconds

    // SCORING SCREEN

        //display finished text
        
        //display correctAnswers

        //display incorrectAnswers

        //display startOver button

        // when startOver button is pressed, go back to the start screen