$(document).ready(function(){

var $button = $('.start-pass');
var $button2 = $('.guess').hide();
var $input = $('input');
var $rebus = $('img');
var $h1 = $('h1');
var $time = $('#time').hide();
var turn = 0
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

var RebusL = RebusArray.length

var turner = function() {
  turn++;
  if (turn = 0) {

  }
  else if (turn %2 === 0) {
    $h1.text('Player 1')

     $time.fadeTo('1000', 0.2);
     $button2.show();

  } else {
    $h1.text('Player 2')
  }
}
// guess text box to variable
$button2.click(function(){

  var guess = $('#guess').val();

});


// match'em or else
var compareGuess = function(){
  if ( guess === randomRebus.answer) {
  alert();

  } else
console.log('loser')

}


var randomNo = function () {

  return Math.floor(Math.random()*RebusL)
  }

$button.click(function(){

  var randomRebus = RebusArray[randomNo()];
  $button.text('PASS')
  turner();
  start();

$rebus.attr("src", randomRebus.location);

  console.log(randomRebus.answer);
  console.log(randomRebus.location);
  console.log(turn);

});
show()
  compareGuess()
//RebusArray[randomRebus].answer



});
