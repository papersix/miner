$(document).ready(function(){
// define some items on the DOM using Jquery
var $button = $('.start-pass');
var $button2 = $('.guess').hide();
var $input = $('input').hide();
var $rebus = $('img');
var $h1 = $('h1');
var $time = $('#time').hide();
var answer = '';
var location = '';
var p1Score = 0
var p2Score = 0
var guesses = 0
// player turns
var roundNo = 0
//two arrays for images & answers, need to not repeat used items
var usedImages =[ ]
var RebusArray =
 [
        {
        answer:"changing times",
        location: "../img/01.jpg"
        },
          {
          answer:"not for all the tea in china",
          location: "../img/02.jpg"
          },
           {
          answer:"it doesn't ring a bell",
          location: "../img/03.jpg"
          },
           {
          answer:"richard nixon",
          location: "../img/04.jpg"
          },
           {
          answer:"not for all the tea in china",
          location: "../img/05.jpg"
          },
           {
          answer:"take it or leave it",
          location: "../img/06.jpg"
          },
];
//length of the array in a varaible
var RebusL = RebusArray.length
// checks (even /odd) goes to next round, updates player no.
var turner = function() {
  roundNo++;


  if (roundNo %2 === 0) {
    $h1.text('Player 2')
    reset();
    start();
    $input.show();
    guesses=0;
  } else {
    $h1.text('Player 1')
      reset();
      start();
      $input.show();
      guesses=0;

  }
   $('#wrong').text(guesses)
}
// match'em or else
var compareGuess = function(){
  console.log(answer);
  console.log(location);
  var guess = $('#guess').val();
  console.log(guess);
  // console.log(randomRedbus.answer);
  if (guess === answer) {
    console.log('correct!');
    stop()
    $time.fadeTo('1000', 1);
    $button.text('Next Round / P2')
    $button2.hide()
    p1Score += $time.text();
    console.log(p1Score);
    console.log(m +'sec' + s);
    $input.hide();

  } else if (guesses === 3) {

    stop()
    $time.fadeTo('1000', 1);
    $button.text('Next Round / P2')
    $button2.hide();
    $input.hide();
    $h1.html(answer);



  }
console.log('you guessed wrong')
guesses++
$('#wrong').text(guesses)


}

//random number function
var randomNo = function () {

  return Math.floor(Math.random()*RebusL)
  }

var randomRebus = RebusArray[randomNo()];


//button one click  (PASS & Start)

$button.click(function(){
  console.log(RebusArray[randomNo()]);
  var randomRebus = RebusArray[randomNo()];
  $button.text('PASS');
  $button2.show();
  $input.show();
  $time.fadeTo('1000', 0.2);
  turner();
  start();
$rebus.attr("src", randomRebus.location);
// answer values stored in variable, avoids confusion on repeatedly calling function
  console.log(randomRebus.answer);
  answer = randomRebus.answer;
  console.log(randomRebus.location);
  location = randomRebus.location;
  console.log(roundNo);

});

$button2.click(function(){

compareGuess();
});
show()

});
