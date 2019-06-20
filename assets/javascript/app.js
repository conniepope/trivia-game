$(document).ready(function(){
  
  $('#start-over').hide();

  // event listeners
  $("#start").on('click', trivia.startGame);
  $("#start-over").on('click', trivia.startGame);
  $(document).on('click' , '.option', trivia.guessChecker);
  
})

var trivia = {
  //variables set up as keys
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 10,
  timerOn: false,
  timerId : '',

  // questions, options and answers 
  questions: {
    q1: "This artist is sometimes credited with the inventions of the parachute, helicopter, and tank.",
    q2: "Who painted 'The Persistence of Memory', an urrealistic image of soft, melting pocket watches?",
    q3: "This artist is known for co-founding the Cubist movement, the invention of constructed sculpture,the co-invention of collage.",
    q4: "After poor health confined this artist to a wheelchair, he gradually transitioned from painting on canvas to 'painting with scissors'. Who was it?",
    q5: "This artist's most famous paintings include 'The Starry Night' and 'Irises'.",
    q6: "This artist was born and raised in Pittsburgh, Pennsylvania.",
    q7: "An Italian scultptor of the Renaissance.",
    q8: "This Florentine painter is most know for his pictures of the Madonna and Child, and his life-size mythological paintings, such as 'Venus and Mars'.",
    q9: "The leading French Impressionist landscape painter.",
    q10: "Painter of the Sistine Chapel ceiling",
  },
  options: {
    q1: ["Salvador Dali", "Pablo Picasso", "Leonardo da Vinci", "Vincent Van Gogh"],
    q2: ["Rembrandt", "Salvador Dali", "Andy Warhol", "Michelangelo"],
    q3: ["Pablo Picasso", "Leonardo da Vinci", "Claude Monet", "Diego Velazquez"],
    q4: ["Jackson Pollock", "Edgar Degas", "Henry Matisse", "Auguste Rodin"],
    q5: ["Vincent van Gogh", "Paul Gauguin", "Leonardo da Vinci", "Rembrandt"],
    q6: ["Paul Cezanne", "Peter Paul Rubens", "Salvador Dali", "Andy Warhol"],
    q7: ["Michelangelo", "Donatello", "Raphael", "Leonardo da Vinci"],
    q8: ["Sandro Botticelli", "Paul Cezanne", "Claude Monet", "Giovanni Bellini"],
    q9: ["Pablo Picasso", "Edgar Degas", "Paul Cezanne", "Claude Monet"],
    q10: ["Raphael", "Bartolomeo Caporali", "Michelangelo", "Giovanni Bellini"],
  },
  answers: {
    q1: "Leonardo da Vinci",
    q2: "Salvador Dali",
    q3: "Pablo Picasso",
    q4: "Henry Matisse",
    q5: "Vincent van Gogh",
    q6: "Andy Warhol",
    q7: "Donatello",
    q8: "Sandro Botticelli",
    q9: "Claude Monet",
    q10: "Michelangelo",
  },

  // trivia methods
  // method to start game
  startGame: function(){
    // game restart
    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.incorrect = 0;
    trivia.unanswered = 0;
    clearInterval(trivia.timerId);

    $('#start-over').hide();
    $('#game').show();
    $('#start').hide();
    $('#remaining-time').show();
    $('#timer').html("Remaining Time: " + trivia.timer);
    //  empty last results
    $('#results').html('');
    
    // ask first question
    trivia.nextQuestion();
    
  },
  // method to loop through and display questions and options 
  nextQuestion : function(){
    
    // set timer to 10 seconds each question
    trivia.timer = 10;
    $('#timer').text("Remaining Time: " + trivia.timer);
    
    // to prevent timer speed up
    if(!trivia.timerOn){
      trivia.timerId = setInterval(trivia.timerRunning, 1000);
    }
    
    // gets all the questions then indexes the current questions
    var questionContent = Object.values(trivia.questions)[trivia.currentSet];
    $('#question').text(questionContent);
    
    // an array of all the user options for the current question
    var questionOptions = Object.values(trivia.options)[trivia.currentSet];
    
    // creates all the trivia guess options in the html
    $.each(questionOptions, function(index, key){
      $('#options').append($('<button class="option btn btn-light btn-lg" id="option-buttons">'+key+'</button>'));
    })
    
  },
  // method to decrement counter and count unanswered if timer runs out
  timerRunning : function(){
    // if timer still has time left and there are still questions left to ask
    if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
      $('#timer').text("Remaining Time: " + trivia.timer);
      trivia.timer--;
    }
    // the time has run out and increment unanswered, run result
    else if(trivia.timer === -1){
      trivia.unanswered++;
      trivia.result = false;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Time\'s up!  The answer was '+ Object.values(trivia.answers)[trivia.currentSet] +'</h3>');
    }
    // if all the questions have been shown, show results
    else if(trivia.currentSet === Object.keys(trivia.questions).length){
    
      // hide game 
      $('#game').hide();

      // adds results of game (correct, incorrect, unanswered) to the page
      $('#results').html('<h3>Are you an art aficionado?</h3>'+
        '<p>Correct: '+ trivia.correct +'</p>'+
        '<p>Incorrect: '+ trivia.incorrect +'</p>'+
        '<p>Unaswered: '+ trivia.unanswered +'</p>');
        $('#results').show();

      // show start button to begin a new game
      $('#start-over').show();
    }
    
  },
  // method to evaluate the option clicked
  guessChecker : function() {
    
    // the answer to the current question being asked
    var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
    
    // if the text of the option picked matches the answer of the current question, increment correct
    if($(this).text() === currentAnswer){
      // turn button green for correct
      $(this).addClass('btn-success').removeClass('btn-info');
      
      trivia.correct++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 2000);
      $('#results').html('<h3>Your are correct!</h3>');
    }
    // else the user picked the wrong option, increment incorrect
    else{
      // turn button red for incorrect
      $(this).addClass('btn-danger').removeClass('btn-info');
      
      trivia.incorrect++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 2000);
      $('#results').html('<h3>Sorry that is incorrect! The correct answer is '+ currentAnswer +'</h3>');
    }
    
  },
  // method to remove previous question results and options
  guessResult : function(){
    
    // increment to next question set
    trivia.currentSet++;
    
    // remove the options and results
    $('.option').remove();
    $('#results h3').remove();
    
    // begin next question
    trivia.nextQuestion();
     
  }

}