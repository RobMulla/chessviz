// Create d3 selectors for the various dropdown elements in the DOM
var dropdown = d3.select("#json_sources")
var viztypeselector = d3.select("#viz_type")

// Read in all the player metadata
// NOTE: just do this once so we don't keep re-doing it
var metadata;
d3.json("./data/gm_metadata.json", function(data){
  metadata = data;
});

// Define a function that updates the chessboard visualizations
var update_board = function() {

  // Grab current state of the dropdowns
  var grand_master = dropdown.node().options[dropdown.node().selectedIndex].value;
  var viztype = viztypeselector.node().options[viztypeselector.node().selectedIndex].value;

  // Update global config
  CONFIG['grandmaster'] = grand_master

  // Figure out path to this grand master's data
  source = './data/json/stats/' + grand_master + '_stats.json'

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

  //============================//
  //===== Update the board =====//
  //============================//

  // Read in the game data and change the chessboard
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

  //==================================//
  //===== Update the player info =====//
  //==================================//

  // Update the fullname
  d3.select("#player_name")
    .text(metadata[grand_master]['Name-PGN-Site']);

  // Player photo from Wikipedia
  d3.select("#player_photo")
    .attr('src', metadata[grand_master]['wiki_images'][0])

  // Link to Wikipedia page
  d3.select("#wikipedia_link")
    .attr('href', metadata[grand_master]['wiki_url']);

  // Country
  d3.select("#country")
    .text("Country: " + metadata[grand_master]['Country']);

  // Date of Birth
  d3.select("#date_of_birth")
    .text("Birth Date: " + metadata[grand_master]['Birth Date']);
}

// Update page elements
dropdown.on("change", update_board)
viztypeselector.on("change", update_board)

// Initialize the visualizations on page load
update_board();
