class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses
    this.guessed = []
    this.status = 'playing'
  }

  get puzzle() {
    let puzzle = '';
    this.word.forEach(letter => {
      if (letter === ' ' || this.guessed.includes(letter)){
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })
    return puzzle;
  }

  makeGuess(guess) {
    if (this.status === 'playing') {
      guess = guess.toLowerCase()
      const isUnique = !this.guessed.includes(guess);
      const isBadGuess = !this.word.includes(guess);
    
      if (isUnique) {
        this.guessed.push(guess)
      }
      if (isUnique && isBadGuess) {
        this.remainingGuesses -= 1
      }
    
      this.currentStatus()
    }
  }

  currentStatus() {
    const finished = this.word.every(letter => this.guessed.includes(letter) || letter === ' ')
    if (this.remainingGuesses === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  }

  get statusMessage() {
    switch (this.status) {
      case 'playing':
        return `Guesses left: ${this.remainingGuesses}`
        break;
      case 'failed':
        return `Nice try! The word was "${this.word.join('')}"`
        break
      case 'finished':
        return `Great work! You guessed the word.`
        break;
    }
  }
}


const game1 = new Hangman('What would you do if they came for you in the middle of the night?', 2);
const game2 = new Hangman('New Jersey', 5);