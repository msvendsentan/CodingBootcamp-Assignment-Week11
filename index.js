// Grab the word file
var Word = require("./word.js");

// Inquirer
var inquirer = require("inquirer");

// Word bank for the game (list of fruits)
var wordBank = [
    "apple",
    "apricot",
    "avocado",
    "banana",
    "blackberry",
    "blackcurrant",
    "blueberry",
    "cantaloupe",
    "cherry",
    "clementine",
    "coconut",
    "cranberry",
    "cucumber",
    "currant",
    "date",
    "dragonfruit",
    "durian",
    "elderberry",
    "eggplant",
    "fig",
    "gooseberry",
    "grape",
    "grapefruit",
    "guava",
    "huckleberry",
    "jackfruit",
    "kiwifruit",
    "lemon",
    "lime",
    "loquat",
    "longan",
    "lychee",
    "mandarine",
    "mango",
    "mulberry",
    "nectarine",
    "olive",
    "orange",
    "papaya",
    "passionfruit",
    "peach",
    "pear",
    "persimmon",
    "plantain",
    "plum",
    "pineapple",
    "pomegranate",
    "pomelo",
    "pumpkin",
    "raspberry",
    "squash",
    "strawberry",
    "tamarind",
    "tangerine",
    "tomato",
    "watermelon"
];

// Misc variables
var currentWord;
var wordObj;
var wins = 0;
var losses = 0;
var guessesRemaining;
var guessList = []

function firstInit() {
    console.log("\nWelcome to FruitGuessr! In this hangman-style game, can you guess the fruit before your guesses run out?\n");
    wordSelect();
    playerGuess();
}

function wordSelect() {
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    guessesRemaining = currentWord.length + 5;
    guessList = [];
    wordObj = new Word.Word(currentWord);
    console.log("Here's your word. You have " + guessesRemaining + " guesses, good luck!");
    wordObj.printWord();
}

function playerGuess() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "input"
            }
        ]).then(function(answers) {
            if (/[^a-z]/i.test(answers.input) || answers.input.length != 1) {
                console.log("\nYou need to guess a single lowercase letter! Please try again!\n");
                playerGuess();
            } else if (guessList.includes(answers.input)) {
                console.log("\nYou've already guessed that! Try again!");
                console.log("Guessed letters: " + guessList + "\n");
                playerGuess();
            } else {
                guessList.push(answers.input);
                wordObj.guess(answers.input);
                wordObj.printWord();
                gameProcess();
            }
        });
}

function gameProcess() {
    guessesRemaining--;
    if (guessesRemaining == 0 && wordObj.wordGuessed) {
        win();
    } else if (guessesRemaining > 0) { 
        if (wordObj.wordGuessed) {
            win();
        } else {
            console.log("You have " + guessesRemaining + " guess(es) remaining!\n");
            playerGuess();
        }
    } else {
        loss();
    }
}

function win() {
    wins++;
    console.log("Great job, you've guessed the word!\n");
    console.log("==============");
    console.log("Current Score:");
    console.log("Wins: " + wins + " | Losses: " + losses);
    console.log("==============");
    console.log("\nNew Word!\n");
    wordSelect();
    playerGuess();
}

function loss() {
    losses++;
    console.log("Too bad, you've run out of guesses!\n");
    console.log("==============");
    console.log("Current Score:");
    console.log("Wins: " + wins + " | Losses: " + losses);
    console.log("==============");
    console.log("\nNew Word!\n");
    wordSelect();
    playerGuess();
}

firstInit();