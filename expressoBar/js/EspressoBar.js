// Notes:
// is there a nicer way to access the 2nd child of each reel
// this pattern is ugly:
// var lists = document.getElementsByTagName('ul');
// var child = lists[i].getElementsByTagName('li')[1].className;

var EspressoBar = React.createClass({
  play: function() {
    // TODO, I keep doing this, can we store this globally?
    var lists = document.getElementsByTagName('ul');
    // we need to call shuffle(); on each specific reel
    // otherwise items will shuffle to other reels
    for (var i = 1; i < lists.length + 1; i++){
      $('ul#reel' + i + ' li').shuffle();
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

  // TODO: Improve
  // render eachReel()
  // different property names?
  render: function() {
    return (
      <div className="container">
        <Reel id="reel1" coffee="coffee maker" tea="teapot" espresso="espresso machine" />
        <Reel id="reel2" coffee="coffee filter" tea="tea strainer" espresso="espresso tamper" />
        <Reel id="reel3" coffee="coffee grounds" tea="loose tea" espresso="espresso beans" />
        <button onClick={this.play} className="btn btn-primary">Play!</button>
      </div>
    )
  }
});

// TODO: Improve
// create Block component
// render eachBlock()
// different property names?
var Reel = React.createClass({
  render: function() {
    return (
      <div className="col-md-4">
        <ul id={this.props.id} className="list-unstyled">
          <li className="coffee">{this.props.coffee}</li>
          <li className="tea">{this.props.tea}</li>
          <li className="espresso">{this.props.espresso}</li>
        </ul>
      </div>
    )
  }
});

React.render(<EspressoBar/>, document.getElementById('react-container'));

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
