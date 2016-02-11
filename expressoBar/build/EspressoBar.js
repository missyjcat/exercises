// Notes:
// is there a nicer way to access the 2nd child of each reel
// this pattern is ugly:
// var lists = document.getElementsByTagName('ul');
// var child = lists[i].getElementsByTagName('li')[1].className;

var EspressoBar = React.createClass({displayName: "EspressoBar",
  play: function() {
    // TODO, I keep doing this, can we store this globally?
    var lists = document.getElementsByTagName('ul');
    // we need to call shuffle(); on each specific reel
    // otherwise items will shuffle to other reels
    for (var i = 1; i < lists.length + 1; i++){
      $('ul#list' + i + ' li').shuffle();
    }

    // check winner after every spin
    this.checkWinner();
  },

  checkWinner: function() {
    // TODO
    var lists = document.getElementsByTagName('ul');
    var firstResult = lists[0].getElementsByTagName('li')[1].className;

    // check 2nd & 3rd reel
    for ( var i = 1; i < lists.length; i++) {
      var child = lists[i].getElementsByTagName('li')[1].className;

      // check against first reel
      if (child !== firstResult){
        return;
      }

    }
    // if we made it here, we can display prize
    this.renderPrize(firstResult);
  },

  renderPrize: function(str) {
    alert('you won a ' + str);
  },

  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("div", {className: "col-md-4"}, 
          React.createElement("ul", {id: "list1", className: "list-unstyled"}, 
            React.createElement("li", {className: "coffee"}, "coffee maker"), 
            React.createElement("li", {className: "tea"}, "teapot"), 
            React.createElement("li", {className: "espresso"}, "espresso machine")
          )
        ), 
        React.createElement("div", {className: "col-md-4"}, 
          React.createElement("ul", {id: "list2", className: "list-unstyled"}, 
            React.createElement("li", {className: "coffee"}, "coffee filter"), 
            React.createElement("li", {className: "tea"}, "tea strainer"), 
            React.createElement("li", {className: "espresso"}, "espresso tamper")
          )
        ), 
        React.createElement("div", {className: "col-md-4"}, 
          React.createElement("ul", {id: "list3", className: "list-unstyled"}, 
            React.createElement("li", {className: "coffee"}, "coffee grounds"), 
            React.createElement("li", {className: "tea"}, "loose tea"), 
            React.createElement("li", {className: "espresso"}, "espresso beans")
          )
        ), 

        React.createElement("button", {onClick: this.play, className: "btn btn-primary"}, "Play!")
      )
    )
  }
});

React.render(React.createElement(EspressoBar, null), document.getElementById('react-container'));

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
