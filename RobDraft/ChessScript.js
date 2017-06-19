// FIRST EXAMPLE
d3.json('https://ebemunk.com/chess-dataviz/data/wrc.json', function(err, data) {
  var heatmapExample1 = new ChessDataViz.HeatMap('#heatmap-example-1', null, data.heatmaps.squareUtilization);
});

// SECOND EXAMPLE
d3.json('https://ebemunk.com/chess-dataviz/data/wrc.json', function(err, data) {
  var movePaths = new ChessDataViz.MovePaths('#movepaths', null, data.moves);
});


// THIRD EXAMPLE
d3.json('https://ebemunk.com/chess-dataviz/data/wrc.json', function(err, data) {
  var heatmapExample2 = new ChessDataViz.HeatMap('#heatmap-example-2', {
    colorScale: ['cyan', 'gold'],
    sizeScale: false,
    accessor: {
      color: 'w',
      piece: 'q'
    }
  }, data.heatmaps.checkSquares);

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([25, -6])
    .html(function(d) {
      return d;
    });

  heatmapExample2.dispatch.on('mouseenter', tip.show);
  heatmapExample2.dispatch.on('mouseleave', tip.hide);
  heatmapExample2.dataContainer.call(tip);

    var wButton = d3.select('#w-btn');
  var bButton = d3.select('#b-btn');

  wButton.on('click', function() {
    heatmapExample2.options({
      accessor: {
        color: 'w',
        piece: 'q'
      }
    });

    wButton.classed('button-primary', true);
    bButton.classed('button-primary', false);
  });

  bButton.on('click', function() {
    heatmapExample2.options({
      accessor: {
        color: 'b',
        piece: 'q'
      }
    });

    wButton.classed('button-primary', false);
    bButton.classed('button-primary', true);
  });
});

// CARLSEN DATA TRY


d3.json('/data/Carlsen.pgn', function(err, data) {
  var heatmapCarlsen = new ChessDataViz.HeatMap('#heatmap-carlsen', null, data.heatmaps.squareUtilization);
});
