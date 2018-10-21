var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var wins = 0;
var losses = 0;
var guesses = 9;
var lettersGuessed = [];
var computerGuess = [];

var letterRandom = letters[Math.floor(Math.random()*letters.length)];
computerGuess.push(letterRandom);
//console.log(computerGuess[0]);

document.onkeyup = function(event) {

    var userGuess = event.key;
    lettersGuessed.push(userGuess);

    if ((userGuess === computerGuess[0]) && (guesses > 0)){
       
        wins++;
        guesses = 9;
        lettersGuessed = [];
        computerGuess = [];
        var letterRandom = letters[Math.floor(Math.random()*letters.length)];
        computerGuess.push(letterRandom);
        //console.log(computerGuess[0]);
        
    
    }   else if ((userGuess !== computerGuess[0]) && (guesses > 0)) {

        guesses--;
    
    }   else {
        losses++;
        guesses = 9;
        lettersGuessed = [];
        letterRandom = []
        var letterRandom = letters[Math.floor(Math.random()*letters.length)];
        computerGuess.push(letterRandom);
        //console.log(computerGuess[0]);

    }

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guesses;
    document.getElementById("guesses-sofar").innerHTML = "Your Guesses So Far: " + lettersGuessed;

  };

//Compare guess with random letter
//If guess is wrong log letter, count loss, and subtract from guesses
//If guesses runs out reset
//If guess is right count wins and reset

