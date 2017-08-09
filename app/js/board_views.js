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
  var heatmap_color = hmcolor.node().options[hmcolor.node().selectedIndex].value;
  var heatmap_piece = hmpiece.node().options[hmpiece.node().selectedIndex].value;
  var viztype = viztypeselector.node().options[viztypeselector.node().selectedIndex].value;

  // Grab current state of the menu?
  console.log("PIECE SELECTION:",piece)
  console.log("PLAYER SELECTION:",source)
  console.log("HEATMAP PIECE", heatmappiece)
  console.log("HEATMAP COLOR",heatmapcolor)
  console.log("Viz Type:",viztype)

  // Update configs for the two visualizations
  var MovePathsOptions = {
    accessor: piece,
    binSize: 1,
    pointRandomizer: d3.random.normal(3, 1),
    bezierRandomizer: d3.random.normal(12, 4),
    bezierScaleFactor: 2
  };

  var HeatmapOptions = {
    accessor: {
      piece: heatmap_piece,
      color: heatmap_color
    },
    sizeScale: true,
    colorScale: ['blue', 'red']
  };

  // Read in the game data and 
  d3.json(source, function(data) {

    // Create either a movepaths or heatmap visualization
    if (viztype == 'MovePaths') {
      var chessboardviz = new ChessDataViz.MovePaths('#chess_board',
                                                     MovePathsOptions,
                                                     data.moves);
    } else {
      var chessboardviz = new ChessDataViz.HeatMap('#chess_board',
                                                   HeatmapOptions,
                                                   data.heatmaps.squareUtilization);
    }
  });
}

// Update page elements
dropdown.on("change", change)
pieceselection.on("change", change)
hmcolor.on("change", change)
hmpiece.on("change", change)
viztypeselector.on("change", change)

change(); //trigger json on load