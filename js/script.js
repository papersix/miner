$(document).ready(function(){
// define some items on the DOM
var $button = $('.start-pass');
var $button2 = $('.guess').hide();
var $input = $('input').hide();
var $rebus = $('img');
var $h1 = $('h1');
var $time = $('#time').hide();
var answer = '';
var location = '';
// turns, and two arrays
var roundNo = 0
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
// checks (even /odd) goes to next round, updates turn no.
var turner = function() {
  roundNo++;

  if (roundNo %2 === 0) {
    $h1.text('Player 2')


  } else {
    $h1.text('Player 1')
  }
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
  } else
console.log('you guessed wrong')

}


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
// answer values stored in variable
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

//RebusArray[randomRebus].answer



});
