# rebus miner

A two player game to solve rebus image puzzles online sourced from the underside of “Lone Star” beer bottle caps.  Players take turns and have up to four attempts to solve the puzzle or give up and pass to the next player.  Points are awarded based on the length of time it takes to solve each puzzle and a summery announces the winner at the end.



USER Story


Users include all age groups that share an interest in solving visual puzzles in the rebus format

User will be able able to see a series of images that present words or phrases

User will be prompted to solve the visual puzzle by guessing the anwswer via a textbox

The duration of each image shown will be represented by a timer counting up 

User will be given four guesses before moving onto the next turn or given the opportunity to pass

Solutions to each puzzle will be provided to the user

Player scores will be awarded to the user in relation to how long the puzzle takes to complete


User will expect to see a point score and winner declared

Notes: "A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc."

*************

Simple HTML5 Game uses jquery, some css, and javascript

Special Thanks to Giulia Alfonsi <electric.g@gmail.com> for providing the stopwatch timer JS (stopwatch.js) James & Matt of WDI Purple-Rain for help with  troubleshooting!

*********
Unresolved Issues: 

-providing a solution and pausing the game when player hits the pass button
-fine-tuning of point score system
-not repeating the random images as they are served up (splice was attemtpted)
-code is NOT DRY, became a bit lengthy and requires a bit more efficency



Walkthrough:

Players are greeted with a screen showing the iconic IBM rebus by Designer Paul Rand.  

Player clicks on “start” button which randomly loads the first bottle-cap rebus onto the screen.   A headline above the image reads player one and a  visual timer starts with a pass button, guess button, and text box appearing beneath the image.

Player can make up to 4 attempts to solves the rebus by typing a guess into the input box and clicking on guess.  Incorrect guesses are logged and shown above the top image corner. The timer stops once four guesses are made, the pass button is clicked, or the correct answer is given.

Points are awarded depending on the time it takes to solve each rebus puzzle. 

Game alternates between player one and player two until all the images are cycled.

A win screen shows the point total between player one and player two and announces the winner.

