// Espresso Machine
var EspressoMachine = function(){
  var lists = document.getElementsByTagName('ul');

  // holds winning value
  var winner = '';

  this.playSlots = function(){
    // clear the prize if someone had just won
    if (winner !== ''){
      clearWinner();
    }

    // we need to call shuffle(); on each specific list
    // otherwise items will shuffle to other lists
    for ( var i = 1; i < lists.length + 1; i++ ){
      $('ul#list' + i + ' li').shuffle();
    }

    // display prize if true
    if (checkWinner()){
      displayPrize();
    };
  }

  // returns true if 2nd child of each list match one another
  var checkWinner = function(){
    winner = lists[0].getElementsByTagName('li')[1].className

    // check 2nd & 3rd list
    for ( var i = 1; i < lists.length; i++) {
      var child = lists[i].getElementsByTagName('li')[1].className;

      // check against winner in first reel
      if (child !== winner){
        return false;
      }
    }

    return true;
  };

  // clears the prize & winning value
  var clearWinner = function(){
    winner = '';
    document.getElementById('winner').innerHTML = '';
  };

  var displayPrize = function(){
    document.getElementById('winner').innerHTML = winner;
  };
};

// new instance
var newGame = new EspressoMachine();

// Written by Chris Coyier
// https://css-tricks.com/snippets/jquery/shuffle-children/
(function($){
  $.fn.shuffle = function() {
    var allElems = this.get(),

    getRandom = function(max) {
      return Math.floor(Math.random() * max);
    },

    shuffled = $.map(allElems, function(){
      var random = getRandom(allElems.length),
          randEl = $(allElems[random]).clone(true)[0];
      
      allElems.splice(random, 1);
      
      return randEl;
    });
    
    this.each(function(i){
        $(this).replaceWith($(shuffled[i]));
    });
    
    return $(shuffled);
  };
})(jQuery);
