//VARIABLES
var timer;
var correctAnswers;
var incorrectAnswers;
// questions with answer options (as radio buttons?) with only one being able to be selected
var questions = [
    {
        q: "This artist is sometimes credited with the inventions of the parachute, helicopter, and tank.",
        options: ["Salvador Dali", "Pablo Picasso", "Leonardo da Vinci", "Vincent Van Gogh"],
        answer: 2
    },
    {
        q: "Who painted 'The Persistence of Memory', an urrealistic image of soft, melting pocket watches?"  ,
        options: ["Rembrandt", "Salvador Dali", "Andy Warhol", "Michelangelo"],
        answer: 1
    },
];

// START SCREEN
function reset() {
// show start button
    $("#start").show();
    $("#start-over").hide();

    correctAnswers = 0;
    incorrectAnswers = 0;

}
//once the start button is clicked  
$("#start").on("click", function() {
    playGame();
})

// GAME PLAY
function playGame () {
    // hide start button
    $("#start").hide();
    $("#start-over").hide();
    
    // QUESTION SCREEN/TIMER

    // display timer & first question w/answers
    timer = 20;
    $(".timer").text(timer);
    $(".question").html(questions[0].q);
    console.log(questions[0].q)
    console.log(questions[0].options);
    for (var i = 0; i < questions[0].options.length; i++) {
        $(".answers").html(questions[0].options)
    }


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
} 
    // SCORING SCREEN
function scoring () {
        //display finished text
        $(".how-you-did").text("Are you an art aficionado?")    
        //display correctAnswers
        $(".correct-answer-score").text(correctAnswers)
        //display incorrectAnswers
        $(".incorrect-answer-score").text(incorrectAnswers)
        //display startOver button
        $("#start-over").show()
        // when startOver button is pressed, go back to the start screen
        $("#start-over").on("click", function() {
            reset();
        });
    }        