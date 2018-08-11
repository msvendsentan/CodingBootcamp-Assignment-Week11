// Grab the letter file
var Letter = require("./letter.js");

function Word(word) {
    // Split the word string into an array of letters, create Letter constructors and push into array
    var wordArr = word.split("");
    var LetterArr = []
    wordArr.forEach(function(character) {
        var letterObj = new Letter.Letter(character);
        LetterArr.push(letterObj);
    });

    
    this.letterObjects = LetterArr;

    this.wordGuessed = false;

    this.printWord = function() {
        var wordGuessArr = [];
        this.letterObjects.forEach(function(object) {
            wordGuessArr.push(object.return());
        });
        console.log(wordGuessArr.join(" ") + "\n");
    }

    this.guess = function(guess) {
        var guessCheck = false;
        this.letterObjects.forEach(function(object) {
            object.check(guess);
            if (guess == object.character) {
                guessCheck = true;
            }
        });

        if (guessCheck) {
            console.log("\nCorrect!");
        } else {
            console.log("\nIncorrect!");
        }

        if (this.letterObjects.every(function(element) {
            return element.guessed == true;
        })) {
            this.wordGuessed = true;
        }
    }
}


// Export what's needed for use in the index.js file
module.exports = {
    Word: Word,
};