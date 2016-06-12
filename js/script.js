// miner ver01
//Thanks to Giulia Alfonsi <electric.g@gmail.com>
//for providing the stopwatch timer JS (stopwatch.js)
// James & Matt of WDI Purple-Rain for some troubleshooting!


$(document).ready(function(){


// define some items on the DOM using Jquery
var $button = $('.start-pass');
var $button2 = $('.guess').hide();
var $button3 = $('.pass').hide();
var $input = $('input').hide();
var $rebus = $('img');
var $h1 = $('h1');
var $time = $('#time').hide();
var answer = '';
var location = '';
var P1totalTime = 0
var P2totalTime = 0
var play2
var play1
var p1Score = 0
var p2Score = 0
var guesses = 0
var pass
// player turns
var roundNo = 0
var pointAward =0
//two arrays for images & answers, need to not repeat used items

var usedImages =[ ]
var rebusArray =
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
          answer:"breaking bad",
          location: "../img/05.jpg"
          },
           {
          answer:"take it or leave it",
          location: "../img/06.jpg"
          },
];



//length of the array in a varaible
var RebusL = rebusArray.length

var playerScore = function (){

  if ( play2 === 'Player 2') {
        P2totalTime += (m * 60 + s)
        if (P2totalTime < 5) {

          p2Score += 1000
        } else if (P2totalTime < 10 ) {
          p2Score += 500
        } else if (P2totalTime < 20 ) {
          p2Score += 100
        } else {
          P2totalTime += 10
        }


    } else {
        P1totalTime += (m * 60 + s)

if (P1totalTime < 5) {

          p1Score += 1000
        } else if (P2totalTime < 10 ) {
          p1Score += 500
        } else if (P2totalTime < 20 ) {
          p1Score += 100
        } else {
          p1Score += 10
        }


    }
}
// match'em or else
var compareGuess = function(){
  var guess = $('#guess').val();
  // console.log(randomRedbus.answer);
  if (guess === answer) {
    stop();
    $time.fadeTo('1000', 1);
    $button.text('Next Round / P2');
    $button2.hide();
    playerScore();

    // var totalTime =   (m *60) + s

    $input.hide();

  } else if (guesses === 3) {

    stop()
    $time.fadeTo('1000', 1);
    $button.text('Next Round / P2')
    $button2.hide();
    $input.hide();
    $h1.html(answer);
    playerScore();
   // trying to add slicer here
  // splicer();

    // randomRebus.splice(push(usedImages), 1)[0];
    }
    console.log('you guessed wrong')
    guesses++
    $('#wrong').text(guesses)
}

// checks (even /odd) goes to next round, updates player no.
var turner = function() {
  roundNo++;
  if (roundNo > RebusL) {
    winState()
    } else if (roundNo %2 === 0) {
        playerState = 'p1'
        play2 = ('Player 2');
        $h1.text(play2)
        reset();
        start();
        $input.show();
        guesses=0;
        // var P1totalTime += (m *60) + s
      } else {
        play1 = ('Player 1');
        playerState = 'p2'
        $h1.text(play1)
          reset();
          start();
          $input.show();
          guesses=0;

      }
     $('#wrong').text(guesses)
}


//random number function
var randomNo = function () {

  return Math.floor(Math.random()*RebusL)
  }

// var randomRebus = RebusArray[randomNo()];


//button one click  (PASS & Start)

$button.click(function(){

  var randomRebus = rebusArray[randomNo()];
  $button.text('PASS');
  $button2.show();
  $input.show();
  $time.fadeTo('1000', 0.2);
  turner();
  start();

$rebus.attr("src", randomRebus.location);
// answer values stored in variable, avoids confusion on repeatedly calling function
  answer = randomRebus.answer;
  location = randomRebus.location;
  itemPlace = rebusArray.indexOf(randomRebus);

});

// pointscheme

// var awardPoints = function () {


// switch (totalTime) {
//     case totalTime < 10:
//       pointAward += 100;
//       break;
//     case totalTime < 20:
//       pointAward += 50;
//       break;
//     default:
//       pointAward += 0;
//       }

// }

var winState = function(){

   stop()
    $time.hide();
    $button.hide()
    $button2.hide();
    $input.hide();
    $rebus = $('img').hide();
    console.log(P1totalTime)
    console.log(P2totalTime)
    if ( p1Score > p2Score ) {

      $h1.html('Player 1 Wins' + ' -- ' + p1Score + ' p2 score ' + p2Score  );
    } else {

       $h1.html('Player 2 Wins'+ ' -- ' + p2Score + ' p1 Score: ' +  p1Score  );
    }



}

// how to get rid of selected images?? splicer so image

// function splicer(){
//   // var k = rebusArray.indexOf(randomRebus);
//     if(itemPlace != -1)
//     // rebusArray.delete(itemPlace, 1);
//     console.log(itemPlace)
//       console.log(itemPlace)
//         console.log(itemPlace)
//         rebusArray.splice(itemPlace);

//   }

$button3.click(function(){
$button3.hide();
$button2.hide();
pass = 'skipped'
$button.show();

 // stop();
 //    $time.fadeTo('1000', 1);
 //    $button.text('Next Round / P2');

 //    playerScore();

});

$button2.click(function(){

compareGuess();
});
show()

});
