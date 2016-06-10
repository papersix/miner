$(document).ready(function(){

var $button = $('button');
var $input = $('input');
var $rebus = $('img');
var $h1 = $('h1');
var turn = 0
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

var turner = function() {
  turn++;
  if (turn %2 === 0) {
    $h1.text('Player 1')
  } else {
    $h1.text('Player 2')
  }
}

var randomNo = function () {

  return Math.floor(Math.random()*RebusArray.length)
  }

$button.click(function(){

  var randomRebus = RebusArray[randomNo()];
  turner();

$rebus.attr("src", randomRebus.location);

  console.log(randomRebus.answer);
  console.log(randomRebus.location);
  console.log(turn);

});


//RebusArray[randomRebus].answer



});
