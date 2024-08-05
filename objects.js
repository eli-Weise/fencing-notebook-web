/**
 * Fencer object constructor
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {Enumerator} rating 
 * @param {Enumerator} hand 
 * @param {Enumerator} grip 
 * @param {number} birthYear 
 * @param {Enumerator} height 
 * @param {string} notes 
 */
function Fencer(firstName, lastName, rating, hand, grip, birthYear, height, notes) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.rating = rating;
  this.hand = hand;
  this.grip = grip;
  this.birthYear = birthYear;
  this.height = height;
  this.notes = notes;
}

/**
 * Bout object constructor
 * @param {Fencer} opponent 
 * @param {number} myScore 
 * @param {number} opponentScore 
 * @param {object} myCards 
 * @param {object} opponentCards 
 * @param {Enumerator} pCards 
 * @param {string} notes 
 */
function Bout(opponent, winner, myScore, opponentScore, myCards, opponentCards, pCards, notes) {
  this.opponent = opponent;
  this.winner = winner;
  this.myScore = myScore;
  this.opponentScore = opponentScore;
  this.myCards = myCards;
  this.opponentCards = opponentCards;
  this.pCards = pCards;
  this.notes = notes;

  this.getWinner = function () {
    if (this.winner) {
      return winner + "won!";
    } else if (myScore >= opponentScore) {
      return "I won!";
    } else {
      returnopponent + "won!";
    }
  }
}