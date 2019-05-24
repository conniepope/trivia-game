$(document).ready(function(){

    //VARIABLES
    var timer;
    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var j = 0;
    console.log(correctAnswers);
    console.log(incorrectAnswers);


    // questions with answer options (as radio buttons?) with only one being able to be selected
    var questions = [
        {    q: "This artist is sometimes credited with the inventions of the parachute, helicopter, and tank.",
            options: ["Salvador Dali", "Pablo Picasso", "Leonardo da Vinci", "Vincent Van Gogh"],
            answer: "Leonardo da Vinci",
            // photo: 
        },
        {    q: "Who painted 'The Persistence of Memory', an urrealistic image of soft, melting pocket watches?" ,
            options: ["Rembrandt", "Salvador Dali", "Andy Warhol", "Michelangelo"],
            answer: "Salvador Dali"
        },
        {    q: "This artist is known for co-founding the Cubist movement, the invention of constructed sculpture,the co-invention of collage.",
            options: ["Pablo Picasso", "Leonardo da Vinci", "Claude Monet", "Diego Velazquez"],
            answer: "Pablo Picasso"
        },
        {    q: "After poor health confined this artist to a wheelchair, he gradually transitioned from painting on canvas to 'painting with scissors'. Who was it?",
            options: ["Jackson Pollock", "Edgar Degas", "Henry Matisse", "Auguste Rodin"],
            answer: "Henry Matisse"
        },
        {   q: "This artist's most famous paintings include 'The Starry Night' and 'Irises'.",
            options: ["Vincent van Gogh", "Paul Gauguin", "Leonardo da Vinci", "Rembrandt"],
            answer: "Vincent van Gogh"
        },
        {   q: "This artist was born and raised in Pittsburgh, Pennsylvania.",
            options: ["Paul Cezanne", "Peter Paul Rubens", "Salvador Dali", "Andy Warhol"],
            answer: "Andy Warhol"
        },
        {   q: "An Italian scultptor of the Renaissance.",
            options: ["Michelangelo", "Donatello", "Raphael", "Leonardo da Vinci"],
            answer: "Donatello"
        },
        {   q: "This Florentine painter is most know for his pictures of the Madonna and Child, and his life-size mythological paintings, such as 'Venus and Mars'.",
            options: ["Sandro Botticelli", "Paul Cezanne", "Claude Monet", "Giovanni Bellini"],
            answer: "Sandro Botticelli"
        },
        {   q: "The leading French Impressionist landscape painter.",
            options: ["Pablo Picasso", "Edgar Degas", "Paul Cezanne", "Claude Monet"],
            answer: "Claude Monet"
        },
        {   q: "Painter of the Sistine Chapel ceiling",
            options: ["Raphael", "Bartolomeo Caporali", "Michelangelo", "Giovanni Bellini"],
            answer: "Michelangelo"
        }
    ];

    // for loop around whole thing from here to complete bottom????
    // for (var j = 0; j < questions.length; j++) { 


    // START SCREEN
    function reset() {
    // show start button
        $("#start").show();
        $("#start-over").hide();
        $("#submit").hide();
        $(".how-you-did").empty();
        $(".correct-answer-score").empty();
        $(".incorrect-answer-score").empty();
        $(".wrong-or-right").empty();
        $(".correct-answer").empty();
        $(".timer").hide();

        correctAnswers = 0;
        incorrectAnswers = 0;
        j = 0;
        console.log("reset " + j)
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
        
        // timer is reset to 20 seconds
        function startTimer() {
            timer = 20;
            //  Display timer
            $(".timer").show()
            $(".timer").html("Time remaining: " + timer);
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
      
        //  The decrement function.
        function decrement() {
            //  Decrease number by one.
            timer--;
            //  Display timer
            $(".timer").html("Time remaining: " + timer);
            //  when timer reaches 0
            if (timer === 0) {
              // stop
              stop();
              clearInterval(intervalId);
              //  display "time is up.""
              answerScreen();  
            }
        }

        //timer starts countdown right away
        nextQuestion();
    
        function nextQuestion() {

            $(".question").empty();
            $(".answers").empty();
            startTimer();;

            $(".question").html(questions[j].q);
            console.log(questions[j].q) 
            console.log("nextquestion " + j)

            var answers = $(".answers");
            answers.html('');
            for (var i = 0; i < questions[j].options.length; i++) {
                answers.append('<label><input type="radio" name="options" value="' + questions[j].options[i] + '"/> ' + questions[j].options[i] + '</label><br>');
                console.log(answers + "answers " + j)
            }
            $("#submit").show().on("click", function(){
                answerScreen();
            })

        }

        // ANSWER SCREEN
        function answerScreen() {
            //stop timer
            $(".timer").hide();
            $("#submit").hide();

            //compare user answer with correct answer
            if ( $("input[type=radio][name=options]:checked" ).val() === questions[j].answer) {
                //if correct answer,
                correctAnswers++;
                console.log(correctAnswers)
                // display congrats for 5 seconds
                $(".wrong-or-right").html("You are correct!");
                // and display correct answer,
                correctAnswer();
            }
            else if ( $("input[type=radio][name=answer]:checked" ).val() !== questions[j].answer && timer > 0) {
            // if incorrect answer,
                incorrectAnswers++;
                console.log(incorrectAnswers)
                //display wrong for 5 seconds
                $(".wrong-or-right").html("Sorry, that is incorrect!");
                // and display correct answer,
                correctAnswer();
                console.log("incorrect answers condition" + questions[j].answer)
            }
            // if no answer,
            else {
                //display 'time has run out'
                incorrectAnswers++;
                $(".wrong-or-right").html("Your time is up!");
                // and display correct answer,
                correctAnswer();
            }
            console.log("answerScreen " + questions[j].answer)
        }

        //next question with answer options displays after correct answer is displayed for 3 seconds

        function correctAnswer() {
            $(".correct-answer").html("The correct answer is " + questions[j].answer);
            // display corresponding photo
            console.log("correctAnswer " + questions[j].answer)
            j++;
            console.log("j++ " + j++)

            if (j === questions.length -1) {

                scoring();
            }
            nextQuestion()

            
        }       
    } 
    //Wait 5 seconds after displaying correct answer,
    //then clear question
    //reset timer     
    //display next question     questions[j] = questions [j + 1];     ???????????????


        // SCORING SCREEN
    function scoring () {
            //display finished text
            $(".how-you-did").text("Are you an art aficionado?")    
            //display correctAnswers
            $(".correct-answer-score").text("Correct Answers: " + correctAnswers)
            //display incorrectAnswers
            $(".incorrect-answer-score").text("Incorrect Answers: " + incorrectAnswers)
            //display startOver button
            $("#start-over").show()
            // when startOver button is pressed, go back to the start screen
            $("#start-over").on("click", function() {
                reset();
            });
    };

    reset() 


})  
    