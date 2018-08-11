# CodingBootcamp-Assignment-Week11
A simple word guess command line game for Week 11 of UofT's Coding Bootcamp.

**Instructions**
* This is a node application that requires the inquirer package; do not forget to install after cloning!
* Similar to a hangman game, you have a limited number of single-letter guesses to populate the word
* The current iteration of this game uses fruit as a category

**Specifications**
* Use node and inquirer/prompt packages to build a dynamic word guess came for command line
* Use at minimum three files
* * The first file, letter.js, should contain a constructor function
* * The second file, word.js, should require letter.js and contain a constructor function that populates an array of objects created through the letter.js constructor
* * The third file, index.js, should require word.js and contain the game logic
* Functions where possible should be embedded into the constructors as properties of the objects they'll create

**Features**
* Uses constructor functions to build dynamic objects
* Uses node.js to print the game to console
* Uses modules/requires to split the game logic across three files
* Basic score-keeping & guess-counting functionality
* Basic filtering of player inputs (will only receive single lowercase letters)

**Future Directions**
* Aesthetics (in code and console!)
* Word categories, as selected by the player
* Persistence in the form of writing to a .txt or using SQL