// FIRST EXAMPLE
d3.json('https://ebemunk.com/chess-dataviz/data/wrc.json', function(err, data) {
  var heatmapExample1 = new ChessDataViz.HeatMap('#heatmap-example-1', null, data.heatmaps.squareUtilization);
});

// SECOND EXAMPLE
d3.json('https://ebemunk.com/chess-dataviz/data/wrc.json', function(err, data) {
  var movePaths = new ChessDataViz.MovePaths('#movepaths', {accessor: 'e7'}, data.moves);
});


// THIRD EXAMPLE
// d3.json('https://ebemunk.com/chess-dataviz/data/wrc2.json', function(err, data) {
//   var heatmapExample2 = new ChessDataViz.HeatMap('#heatmap-example-2', {
//     colorScale: ['cyan', 'gold'],
//     sizeScale: false,
//     accessor: {
//       color: 'w',
//       piece: 'q'
//     }
//   }, data.heatmaps.checkSquares);

//   var tip = d3.tip()
//     .attr('class', 'd3-tip')
//     .offset([25, -6])
//     .html(function(d) {
//       return d;
//     });

//   heatmapExample2.dispatch.on('mouseenter', tip.show);
//   heatmapExample2.dispatch.on('mouseleave', tip.hide);
//   heatmapExample2.dataContainer.call(tip);

//     var wButton = d3.select('#w-btn');
//   var bButton = d3.select('#b-btn');

//   wButton.on('click', function() {
//     heatmapExample2.options({
//       accessor: {
//         color: 'w',
//         piece: 'q'
//       }
//     });

//     wButton.classed('button-primary', true);
//     bButton.classed('button-primary', false);
//   });

//   bButton.on('click', function() {
//     heatmapExample2.options({
//       accessor: {
//         color: 'b',
//         piece: 'q'
//       }
//     });

//     wButton.classed('button-primary', false);
//     bButton.classed('button-primary', true);
//   });
// });

// ROBS DATA TRY

d3.json('./data/Rob_stats.json', function(err, data) {
  var heatmapRob = new ChessDataViz.HeatMap('#heatmap-rob', null, data.heatmaps.squareUtilization);
});

d3.json('./data/Rob_stats.json', function(err, data) {
  var movePaths = new ChessDataViz.MovePaths('#movepaths2', {accessor: 'Qd1', bezierScaleFactor: 5, binSize: 2, margin: 5}, data.moves);
});

d3.json('./data/Carlsen_out_stats.json', function(err, data) {
  var movePaths = new ChessDataViz.MovePaths('#movepaths-carlsen', {accessor: 'Qd1', bezierScaleFactor: 5, binSize: 2, margin: 5}, data.moves);
});

d3.json('./data/Carlsen_out_stats.json', function(err, data) {
  var heatmapRob = new ChessDataViz.HeatMap('#heatmap-example-carlsen', null, data.heatmaps.squareUtilization);
});
