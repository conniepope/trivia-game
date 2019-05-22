$(document).ready(function(){

    //VARIABLES
    var timer;
    var intervalId;
    var correctAnswers;
    var incorrectAnswers;
    // questions with answer options (as radio buttons?) with only one being able to be selected
    var questions = [
        {
            q: "This artist is sometimes credited with the inventions of the parachute, helicopter, and tank.",
            options: ["Salvador Dali", "Pablo Picasso", "Leonardo da Vinci", "Vincent Van Gogh"],
            answer: "Leonardo da Vinci"
        },
        {
            q: "Who painted 'The Persistence of Memory', an urrealistic image of soft, melting pocket watches?" ,
            options: ["Rembrandt", "Salvador Dali", "Andy Warhol", "Michelangelo"],
            answer: "Salvador Dali"
        },
        {
            q: "This artist is known for co-founding the Cubist movement, the invention of constructed sculpture,the co-invention of collage.",
            options: ["Pablo Picasso", "Leonardo da Vinci", "Claude Monet", "Diego Velazquez"],
            answer: "Pablo Picasso"
        }
    ];

    // START SCREEN
    function reset() {
    // show start button
        $("#start").show();
        $("#start-over").hide();
        $("#submit").hide();


        correctAnswers = 0;
        incorrectAnswers = 0;
        console.log ("this is working");
        //once the start button is clicked  
        $("#start").on("click", function() {
            playGame();
        })
    }


    // GAME PLAY
    function playGame () {
        // hide start button
        $("#start").hide();
        $("#start-over").hide();


        // QUESTION SCREEN/TIMER

        // display timer & first question w/answers
        function startTimer() {
            timer = 20;
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
      
        //  The decrement function.
        function decrement() {
            //  Decrease number by one.
            timer--;
            //  Display timer
            $(".timer").html(timer);
            //  when timer reaches 0
            if (timer === 0) {
              // stop
              stop();
              clearInterval(intervalId);
              //  display "time is up.""
              //   $(".timer").html("Your time is up!");
              answerScreen();  
            }
        }

        //timer starts countdown right away
        startTimer();

        // function nextQuestion() {
            // for (var j = 0; j < questions.length; i++) {

            $(".question").html(questions[j].q);
            console.log(questions[j].q)

            var answers = $(".answers");
            answers.html('');
            for (var i = 0; i < questions[j].options.length; i++) {
                answers.append('<label><input type="radio" name="options" value="' + questions[j].options[i] + '"/> ' + questions[j].options[i] + '</label><br>');
                console.log(answers)
            }
            $("#submit").show().on("click", function(){
                answerScreen();
            })

        // }

        // ANSWER SCREEN
        function answerScreen() {
            //stop timer
            $(".timer").hide();

            //compare user answer with correct answer
            if ( $("input[type=radio][name=options]:checked" ).val() === questions[0].answer) {
                //if correct answer,
                correctAnswers++;
                setInterval(correct, 1000)
            }
            else if ( $("input[type=radio][name=answer]:checked" ).val() !== questions[0].answer && timer > 0) {
            // if incorrect answer,
                incorrectAnswers++;
                setInterval(incorrect, 1000)
            }
            // if no answer,
            else {
                //display 'time has run out'
                incorrectAnswers++;
                setInterval(timesUp, 1000)
            }
        }

        //next question with answer options displays after correct answer is displayed for 5 seconds

        // timer is reset to 20 seconds

        // display correct answer

        function correct() {
            // display congrats for 5 seconds
            $(".wrong-or-right").html("You are correct!");
            // and display correct answer,
            $(".correct-answer").html("The correct answer is " + questions[0].answer);
        }

        function incorrect() {
            //display wrong for 5 seconds
            $(".wrong-or-right").html("Sorry, that is incorrect!");
            // and display correct answer,
            $(".correct-answer").html("The correct answer is " + questions[0].answer);
        }

        function timesUp() {
            $(".wrong-or-right").html("Your time is up!");
            // and display correct answer,
            $(".correct-answer").html("The correct answer is " + questions[0].answer);
        }

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
    };

    reset() 

})  
    