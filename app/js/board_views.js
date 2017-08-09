// Create d3 selectors for the various dropdown elements in the DOM
var dropdown = d3.select("#json_sources")
var pieceselection = d3.select("#piece_selector")
var hmcolor = d3.select("#heatmap_color")
var hmpiece = d3.select("#heatmap_piece")
var viztypeselector = d3.select("#viz_type")

// Define a function that updates the chessboard visualizations
var update_board = function() {

  // Grab current state of the dropdowns
  var source = dropdown.node().options[dropdown.node().selectedIndex].value;
  var piece = pieceselection.node().options[pieceselection.node().selectedIndex].value;
  var heatmap_color = hmcolor.node().options[hmcolor.node().selectedIndex].value;
  var heatmap_piece = hmpiece.node().options[hmpiece.node().selectedIndex].value;
  var viztype = viztypeselector.node().options[viztypeselector.node().selectedIndex].value;

  // Grab current state of the menu?
  console.log("PIECE SELECTION:",piece)
  console.log("PLAYER SELECTION:",source)
  console.log("HEATMAP PIECE", heatmap_piece)
  console.log("HEATMAP COLOR",heatmap_color)
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
      var chessboardviz = new ChessDataViz.MovePaths(selector = '#chess_board',
                                                     options = MovePathsOptions,
                                                     data = data.moves);
    } else {
      var chessboardviz = new ChessDataViz.HeatMap(selector = '#chess_board',
                                                   options = HeatmapOptions,
                                                   data = data.heatmaps.squareUtilization);
    }
  });
}

// Update page elements
dropdown.on("change", update_board)
pieceselection.on("change", update_board)
hmcolor.on("change", update_board)
hmpiece.on("change", update_board)
viztypeselector.on("change", update_board)

// Initialize the visualizations on page load
update_board();
