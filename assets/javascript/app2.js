// $(document).ready(function(){

    //VARIABLES
    var timer;
    var intervalId;
    var correctAnswers;
    var incorrectAnswers;

    // questions with answer options (as radio buttons?) with only one being able to be selected
    var questions = [
    {   q: "This artist is sometimes credited with the inventions of the parachute, helicopter, and tank.",
        options: ["Salvador Dali", "Pablo Picasso", "Leonardo da Vinci", "Vincent Van Gogh"],
        answer: "Leonardo da Vinci",
        // photo: 
    },
    {   q: "Who painted 'The Persistence of Memory', an urrealistic image of soft, melting pocket watches?" ,
        options: ["Rembrandt", "Salvador Dali", "Andy Warhol", "Michelangelo"],
        answer: "Salvador Dali"
    },
    {   q: "This artist is known for co-founding the Cubist movement, the invention of constructed sculpture,the co-invention of collage.",
        options: ["Pablo Picasso", "Leonardo da Vinci", "Claude Monet", "Diego Velazquez"],
        answer: "Pablo Picasso"
    },
    {   q: "After poor health confined this artist to a wheelchair, he gradually transitioned from painting on canvas to 'painting with scissors'. Who was it?",
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

            })
        }    

    function startTimer() {
        timer = 20;
        //  Display timer
        $(".timer").show()
        $(".timer").html("Time remaining: " + timer);
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

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
          //   $(".timer").html("Your time is up!");
          answerScreen();  
        }
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
            // display congrats for 5 seconds
            $(".wrong-or-right").html("You are correct!");
            // and display correct answer,
            correctAnswer();
        }
        else if ( $("input[type=radio][name=answer]:checked" ).val() !== questions[j].answer && timer > 0) {
        // if incorrect answer,
            incorrectAnswers++;
            //display wrong for 5 seconds
            $(".wrong-or-right").html("Sorry, that is incorrect!");
            // and display correct answer,
            correctAnswer();
        }
        // if no answer,
        else {
            //display 'time has run out'
            incorrectAnswers++;
            $(".wrong-or-right").html("Your time is up!");
            // and display correct answer,
            correctAnswer();
        }
    }


    for (var j = 0; j < questions.length; j++) { 
        $(".question").append(questions[j].q);
        console.log(questions[j].q)
        startTimer()

    }


// })