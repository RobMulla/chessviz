// Create d3 selectors for the various dropdown elements in the DOM
var dropdown = d3.select("#json_sources")
var viztypeselector = d3.select("#viz_type")

// Read in all the player metadata
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
  CONFIG['viz_type'] = viztype

  // Figure out path to this grand master's data
  source = './data/json/as_color/' + grand_master + '.asblack_stats.json'

  // Update configs for the two visualizations
  var MovePathsOptions = {
    width: 600,
    accessor: CONFIG['piece'],
    binSize: 1,
    pointRandomizer: d3.random.normal(3, 1),
    bezierRandomizer: d3.random.normal(12, 4),
    bezierScaleFactor: 2
  };

  var HeatmapOptions = {
    width: 600,
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

  //======================================//
  //===== Push metadadata to the viz =====//
  //======================================//
  // Update the fullname
  d3.select("#player_name")
    .text(CONFIG["metadata_settings"]["Name-PGN-Site"]);

  // Player photo from Wikipedia
  d3.select("#player_photo")
    .attr('src', CONFIG["metadata_settings"]["wiki_image"])

  // Link to Wikipedia page
  d3.select("#wikipedia_link")
    .attr('href', CONFIG["metadata_settings"]["wiki_url"]);

  // Player Summary
  d3.select("#summary")
    .text(CONFIG["metadata_settings"]["wiki_summary"]);
}


//==================================//
//===== Update the player info =====//
//==================================//
var update_player_info = function(){
  // Update config
  var grand_master = dropdown.node().options[dropdown.node().selectedIndex].value;
  CONFIG["metadata_settings"]["Name-PGN-Site"] = metadata[grand_master]['Name-PGN-Site']
  CONFIG["metadata_settings"]["wiki_image"] = metadata[grand_master]['wiki_images'][0]
  CONFIG["metadata_settings"]["wiki_url"] = metadata[grand_master]['wiki_url']
  CONFIG["metadata_settings"]["Country"] = metadata[grand_master]['Country']
  CONFIG["metadata_settings"]["Birth Date"] = metadata[grand_master]['Birth Date']
  CONFIG["metadata_settings"]["wiki_summary"] = metadata[grand_master]['wiki_summary']

  update_board()
}

// Update page elements
dropdown.on("change", update_board)
dropdown.on("change", update_player_info)
viztypeselector.on("change", update_board)

// Initialize the visualizations on page load
update_board();
