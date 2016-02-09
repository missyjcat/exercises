// WIP
// from Jessica
// Code the game of craps

// rules: 
// first roll, if it's a 7 or 11 it's a win. if it's 2, 3, or 12, you lose.
// if it's any other number, that number is the point
// roll until:
// point = you win
// 7 = you lose

var Craps = function() {
  this.turn = 1;
  this.point = 0;
  this.openCrapOut = [2, 3, 12];
  this.openWin = [7, 11];

  // called only if we are in the first 'turn'
  this.comeOutRoll = function(roll) {
    if (this.openCrapOut.indexOf(roll) > -1) {
      // losing roll
      console.log('You lose: Come Out Roll');
      this.turn = 1;
    } else if (this.openWin.indexOf(roll) > -1) {
      // winning roll
      console.log('You Win: Come Out Roll');
      this.turn = 1;
    } else {
      // neither win or loss. set point
      this.turn++;
      this.point = roll;
      console.log('Point is ' + this.point);
    }
  };

  this.roll = function() {
    var roll = Math.floor((Math.random() * 12) + 1);

    console.log(roll);

    if (this.turn === 1){
      this.comeOutRoll(roll);
    } else {
      this.checkCraps(roll);
    } 
  };

  this.checkCraps = function(roll) {
    if (roll === 7){
      console.log('Lose: Crap Out 7');
      this.turn = 1;
    } else if (roll === this.point) {
      console.log('Win: Point');
      this.turn = 1;
    } else {
      console.log('roll again');
    }
  }
}

var newGame = new Craps();
console.log(newGame.roll());
