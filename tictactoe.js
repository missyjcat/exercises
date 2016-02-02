var TicTacToe = function() {
    this.board = [];

    // 'X', 0, 2
    // JC: this makes sense as a public API so this is fine
    this.playTurn = function(player, x, y){
      this.board[x][y] = player;
      
      // JC: checkWinner should be a helper function. have it return something meaningful that playTurn then returns. but think about it, what shoudl playTurn return?
      this.checkWinner(player, x, y);
    }

    // creates a 2-dimensional array
    // JC: also, this should be implicit every time you construct a new
    // TicTacToe instance, so take out line 2 and remove this.createBoard and just move line 17-20 to line 2. this function you're defining in line 1 runs every time you call new TicTacToe() so construct the board here. you don't need "createBoard"
    this.createBoard = function(number){
        this.board = new Array(number);
        for (var i = 0; i < number; i++){
          this.board[i] = new Array(number);
        }
    };

      // JC: these are called helper functions. even though that book did it, try to avoid using "this" in these functions and just pass board as an input, and return something meaningful instead. Only use this.someMethod = function() { this.sldslkdjf... } if you want it to be exposed as a public method (public API). if the only thing that is going to use this method is inside this class, make it a helper. makes classes easier to unit test.
  
    // will check for winner 
    this.checkWinner = function(player, x, y){
      var len = this.board.length;
      
      // check vert & horizontal axis'
      
      for (var i = 0; i < len; i++){
        // check rows or x-axis
        if (this.board[x][i] !== player){
          return false;
        }
      }
      
      for (var j = 0; j < len; j++){
        // check cols or y-axis
        if (this.board[j][y] !== player){
          return false;
        }
      }
      
      return true;
    
    };
  
}

var hTacToe = new TicTacToe();

console.log(hTacToe.createBoard(3));
console.log(hTacToe.playTurn('X', 0, 1));
console.log(hTacToe.board);
