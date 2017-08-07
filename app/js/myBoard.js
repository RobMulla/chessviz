// create d3 selectors for the various dropdown elements in the DOm
var dropdown = d3.select("#json_sources")
var pieceselection = d3.select("#piece_selector")
var hmcolor = d3.select("#heatmap_color")
var hmpiece = d3.select("#heatmap_piece")
var viztypeselector = d3.select("#viz_type")

var change = function() {

  // Grab current state of the dropdowns
  var source = dropdown.node().options[dropdown.node().selectedIndex].value;
  var piece = pieceselection.node().options[pieceselection.node().selectedIndex].value;
  var heatmapcolor = hmcolor.node().options[hmcolor.node().selectedIndex].value;
  var heatmappiece = hmpiece.node().options[hmpiece.node().selectedIndex].value;
  var viztype = viztypeselector.node().options[viztypeselector.node().selectedIndex].value;

  // Grab current state of the menu?

  console.log("PIECE SELECTION:",piece)
  d3.json(source, function(json) {
    console.log("PLAYER SELECTION:",source)
    console.log("HEATMAP PIECE", heatmappiece)
    console.log("HEATMAP COLOR",heatmapcolor)
    console.log("Viz Type:",viztype)

    d3.json(source, function(err, data) {

      var defaultMovePathsOptions = {
        width: 700,
        margin: 20,
        accessor: piece,
        binSize: 1,
        pointRandomizer: d3.random.normal(3, 1),
        bezierRandomizer: d3.random.normal(12, 4),
        bezierScaleFactor: 2
      };

      var defaultHeatmapOptions = {
        width: 700,
        margin: 20,
        accessor: {
          piece: heatmappiece,
          color: heatmapcolor
        },
        sizeScale: true,
        colorScale: ['blue', 'red']
      };
      if  (viztype == 'MovePaths') {
        console.log("IN MOVE PATHS")
        var chessboardviz = new ChessDataViz.MovePaths('#chess_board', defaultMovePathsOptions, data.moves);
      }
      else {
        var chessboardviz = new ChessDataViz.HeatMap('#chess_board', defaultHeatmapOptions, data.heatmaps.squareUtilization);
      }
    });
  })
}

// Update page elements
dropdown.on("change", change)
pieceselection.on("change", change)
hmcolor.on("change", change)
hmpiece.on("change", change)
viztypeselector.on("change", change)

change(); //trigger json on load