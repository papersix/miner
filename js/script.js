$(document).ready(function(){

var $button = $('button');
var $input = $('input');
var $rebus = $('img');
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
        }
];

var turner = function() {turn++}

var randomNo = function () {

  return Math.floor(Math.random()*RebusArray.length)
  }

$button.click(function(){

  var randomRebus = RebusArray[randomNo()];
  turner()


  console.log(randomRebus.answer);
  console.log(randomRebus.location);
  console.log(turn);

});


//RebusArray[randomRebus].answer



});
