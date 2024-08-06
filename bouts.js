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