var bPawnImg = './img/black_pawn.svg';
var bBishopImg = './img/black_bishop.svg';
var bKnightImg = './img/black_knight.svg';
var bRookImg = './img/black_rook.svg';
var bQueenImg = './img/black_queen.svg';
var bKingImg = './img/black_king.svg';
var wPawnImg = './img/white_pawn.svg';
var wBishopImg = './img/white_bishop.svg';
var wKnightImg = './img/white_knight.svg';
var wRookImg = './img/white_rook.svg';
var wQueenImg = './img/white_queen.svg';
var wKingImg = './img/white_king.svg';
var piece_config = [
{"url":bRookImg,
"row":1,
"column":1,
"piece":"Ra8",
"color":'b',
"pieceType" : 'r'
},
{"url":bKnightImg,
"row":1,
"column":2,
"piece":"Nb8",
"color":'b',
"pieceType" : 'n'
},
{"url":bBishopImg,
"row":1,
"column":3,
"piece":"Bc8",
"color":'b',
"pieceType" : 'b'
},
{"url":bQueenImg,
"row":1,
"column":4,
"piece":"Qd8",
"color":'b',
"pieceType" : 'q'
},
{"url":bKingImg,
"row":1,
"column":5,
"piece":"Ke8",
"color":'b',
"pieceType" : 'k'
},
{"url":bBishopImg,
"row":1,
"column":6,
"piece":"Bf8",
"color":'b',
"pieceType" : 'b'
},
{"url":bKnightImg,
"row":1,
"column":7,
"piece":"Ng8",
"color":'b',
"pieceType" : 'n'
},
{"url":bRookImg,
"row":1,
"column":8,
"piece":"Rh8",
"color":'b',
"pieceType" : 'r'
},
{"url":bPawnImg,
"row":2,
"column":1,
"piece":"a7",
"color":'b',
"pieceType" : 'p'
},
{"url":bPawnImg,
"row":2,
"column":2,
"piece":"b7",
"color":'b',
"pieceType" : 'p'
},
{"url":bPawnImg,
"row":2,
"column":3,
"piece":"c7",
"color":'b',
"pieceType" : 'p'
},
{"url":bPawnImg,
"row":2,
"column":4,
"piece":"d7",
"color":'b',
"pieceType" : 'p'
},
{"url":bPawnImg,
"row":2,
"column":5,
"piece":"e7",
"color":'b',
"pieceType" : 'p'
},
{"url":bPawnImg,
"row":2,
"column":6,
"piece":"f7",
"color":'b',
"pieceType" : 'p'
},
{"url":bPawnImg,
"row":2,
"column":7,
"piece":"g7",
"color":'b',
"pieceType" : 'p'
},
{"url":bPawnImg,
"row":2,
"column":8,
"piece":"h7",
"color":'b',
"pieceType" : 'p'
},
{"url":wPawnImg,
"row":3,
"column":1,
"piece":"a2",
"color":'w',
"pieceType" : 'p'
},
{"url":wPawnImg,
"row":3,
"column":2,
"piece":"b2",
"color":'w',
"pieceType" : 'p'
},
{"url":wPawnImg,
"row":3,
"column":3,
"piece":"c2",
"color":'w',
"pieceType" : 'p'
},
{"url":wPawnImg,
"row":3,
"column":4,
"piece":"d2",
"color":'w',
"pieceType" : 'p'
},
{"url":wPawnImg,
"row":3,
"column":5,
"piece":"e2",
"color":'w',
"pieceType" : 'p'
},
{"url":wPawnImg,
"row":3,
"column":6,
"piece":"f2",
"color":'w',
"pieceType" : 'p'
},
{"url":wPawnImg,
"row":3,
"column":7,
"piece":"g2",
"color":'w',
"pieceType" : 'p'
},
{"url":wPawnImg,
"row":3,
"column":8,
"piece":"h2",
"color":'w',
"pieceType" : 'p'
},
{"url":wRookImg,
"row":4,
"column":1,
"piece":"Ra1",
"color":'w',
"pieceType" : 'r'
},
{"url":wKnightImg,
"row":4,
"column":2,
"piece":"Nb1",
"color":'w',
"pieceType" : 'n'
},
{"url":wBishopImg,
"row":4,
"column":3,
"piece":"Bc1",
"color":'w',
"pieceType" : 'b'
},
{"url":wQueenImg,
"row":4,
"column":4,
"piece":"Qd1",
"color":'w',
"pieceType" : 'q'
},
{"url":wKingImg,
"row":4,
"column":5,
"piece":"Ke1",
"color":'w',
"pieceType" : 'k'
},
{"url":wBishopImg,
"row":4,
"column":6,
"piece":"Bf1",
"color":'w',
"pieceType" : 'b'
},
{"url":wKnightImg,
"row":4,
"column":7,
"piece":"Ng1",
"color":'w',
"pieceType" : 'n'
},
{"url":wRookImg,
"row":4,
"column":8,
"piece":"Rh1",
"color":'w',
"pieceType" : 'r'
}
];

// Table size settings
var width = 300;
var height = 150;

// Define a function to draw this table of pieces
var drawPieceTable = function(data) {
    
    // Find the "piecetable" div in index.html and attach an svg to it
    var svg = d3.select("#piecetable")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    
    // create a table of chess piece images
    // NOTE: the .on('click') method of this thing is the driver
    // for most of the interactions in the visualization.
    svg.selectAll("img")
      .data(data)
      .enter()
      .append("svg")
      .attr("id", "chesspiece")
      .each(function(d) {
          // Reference:
          // [1] https://stackoverflow.com/questions/16429199/selections-in-d3-how-to-use-parentnode-appendchild
          var g = d3.select(this); // Grab the svg we're creating
          var svg_path = d.url;    // Get the file path for this piece's SVG
          d3.xml(svg_path).mimeType("image/svg+xml").get(function(error, xml){
                  g.node().appendChild(xml.documentElement);
                });
        })
      .attr("x", function(d) {return (d.column - 1) * (width / 8);})
      .attr("y", function(d) {return (d.row - 1) * (height / 4);})
      .on('click', function(d){
        
        // gray out all the other pieces
        d3.selectAll("#chesspiece").attr('opacity', 0.2)

        // color this one so it stands out
        d3.select(this).attr('opacity', 1.0)        

        // change selection
        pieceSelect(d.piece, d.pieceType, d.color);
        })
}

// Draw the table of pieces
drawPieceTable(piece_config);

// Change Board when selecting
function pieceSelect(movePathPiece, heatMapPiece, playerColor){
  
  // Update the global config
  CONFIG['piece'] = movePathPiece
  CONFIG['heatmap_piece'] = heatMapPiece
  CONFIG['heatmap_color'] = playerColor

  // Update the board
  update_board();
}
