//Create Chess Boad
var dropdown = d3.select("#json_sources")
d3.json('./data/json/Adams_stats.json', function(err, data) {
 var chessboardviz = new ChessDataViz.MovePaths('#chess_board', null, data.moves);
});

var change = function() {
    console.log("changed")
    };

// Change Data Source based on dropdown
// var dropdown = d3.select("#json_sources")
// var change = function() {
//   var source = d3.select("#json_sources").node().value
//   d3.json(source, function(json) {
//      //continue doing stuff here.
//      // Create Chess Boad
//      var chessboardviz = new ChessDataViz.MovePaths('#chess_board', null, data.moves);
//  });

// }

dropdown.on("change", change)
change(); //trigger json on load
