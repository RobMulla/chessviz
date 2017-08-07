var width = 400;
var height = 200;
var bPawnImg = 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg';
var bBishopImg = 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg';
var bKnightImg = 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg';
var bRookImg = 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg';
var bQueenImg = 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg';
var bKingImg = 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg';
var wPawnImg = 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg';
var wBishopImg = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg';
var wKnightImg = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg';
var wRookImg = 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg';
var wQueenImg = 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg';
var wKingImg = 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg';
    var data = [
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
        var drawPieceTable = function(data) {
            var svg = d3.select("#piecetable")
                .append("svg")
                .attr("width", width)
                .attr("height", height);
            //console.log(data);
            
            svg.selectAll("img")
              .data(data)
              .enter()
              .append("svg:image")
              .attr("xlink:href", function(d) {return d.url;})
              .attr("x", function(d) {return (d.column - 1) * (width / 8);})
              .attr("y", function(d) {return (d.row - 1) * (height / 4);})
              .attr("width", width / 8)
              .attr("height", height / 4)
              .on('click', function(d) {console.log(d.piece);})
              .on('click', function(d){pieceSelect(d.piece, d.pieceType, d.color)})
              // .on('click', function(d){makechart()});
        }
    drawPieceTable(data);


// Change Board when selecting
function pieceSelect(movePathPiece, heatMapPiece, playerColor){
  console.log("Movepath piece is: ",movePathPiece," Heatmap piece is: ",heatMapPiece, " Player color is: ",playerColor)
  document.getElementById('piece_selector').value=movePathPiece
  document.getElementById('heatmap_piece').value=heatMapPiece
  document.getElementById('heatmap_color').value=playerColor
  change();
}