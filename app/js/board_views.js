// Create d3 selectors for the various dropdown elements in the DOM
var dropdown = d3.select("#json_sources")
var viztypeselector = d3.select("#viz_type")

// Define a function that updates the chessboard visualizations
var update_board = function() {

  // Grab current state of the dropdowns
  var source = dropdown.node().options[dropdown.node().selectedIndex].value;
  var viztype = viztypeselector.node().options[viztypeselector.node().selectedIndex].value;

  // Update configs for the two visualizations
  var MovePathsOptions = {
    accessor: CONFIG['piece'],
    binSize: 1,
    pointRandomizer: d3.random.normal(3, 1),
    bezierRandomizer: d3.random.normal(12, 4),
    bezierScaleFactor: 2
  };

  var HeatmapOptions = {
    accessor: {
      piece: CONFIG['heatmap_piece'],
      color: CONFIG['heatmap_color']
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
viztypeselector.on("change", update_board)

// Initialize the visualizations on page load
update_board();
