function Letter(character) {
    
    // "character" will be a string value that contains the underlying character for the letter
    this.character = character;

    // "guessed" will be a boolean value that determines whether the letter has been guessed or not
    this.guessed = false;

    // "return" returns the character if guessed, and a placeholder if not
    this.return = function() {
        if (this.guessed) {
            return this.character;
        } else {
            return "_";
        }
    }
    
    // "check" checks the player's guess against the character and updates "guessed" if correct
    this.check = function(guess) {
        if (guess == this.character) {
            this.guessed = true;
        }
    }
}


// Export what's needed for use in the word.js file
module.exports = {
    Letter: Letter,
};