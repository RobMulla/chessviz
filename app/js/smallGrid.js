var bPawnImg = './img/black_pawn.svg';
var bBishopImg = './img/black_bishop.svg';
var bKnightImg = './img/black_knight.svg';
var bRookImg = './img/black_rook.svg';
var bQueenImg = './img/black_queen.svg';
var bKingImg = './img/black_king.svg';

var pieceData = [
{"url":bPawnImg,
"row":1},
{"url":bBishopImg,
"row":2},
{"url":bKnightImg,
"row":3},
{"url":bRookImg,
"row":4},
{"url":bQueenImg,
"row":5},
{"url":bKingImg,
"row":6}
]

var draw = function() {
    d3.json("./data/json/player_weirdness.json", function(err, data) {
        
    
    // Limit data right now for testing
    //data = data.slice(0, 102);
    //console.log(data);

    var indices = data.length / 6;
    var nameValues = new Array(data.length / 6);    
    
    for(var i=0;i<indices;i++){
      nameValues[i] = {'Name': data[i * 6].Name, 'Column':i+1};
    }

        
    var margin = {
        top: 0,
        right: 20,
        bottom: 60,
        left: 20
    };
        
    var pieceWidth = 30;
        
    var boxPadding = 1;

    var width = Math.min(window.innerWidth / 2, 1500) - margin.left - margin.right - 20,
    height = 200;

        
    //SVG container
    var svg = d3.select('#sm_chart')
	.append("svg")
	.attr("width", width + margin.left + margin.right + pieceWidth)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	//.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        
    svg.selectAll("text")
        .data(nameValues)
        .enter()
        .append("text")
        .text(function(d) {return d.Name;})
        .style("font-size", "14px")
        .attr("id", "player-labels")
        //.transform("rotate(90)")
        .attr("dy", function(d) {return (d.Column - 1) * ((width) / (data.length / 6)) + margin.left + pieceWidth * 2;})
        .attr("dx", -margin.bottom + 5)
        //.attr("dy", ".35em")
        //.attr("text-anchor", "middle")
        
    svg.selectAll("img")
        .data(pieceData)
        .enter()
        .append("svg:image")
        /*.each(function(d) {
          // Reference:
          // [1] https://stackoverflow.com/questions/16429199/selections-in-d3-how-to-use-parentnode-appendchild
          var g = d3.select(this); // Grab the svg we're creating
          var svg_path = d.url;    // Get the file path for this piece's SVG
          d3.xml(svg_path).mimeType("image/svg+xml").get(function(error, xml){
                  g.node().appendChild(xml.documentElement);
                });
        })*/
      .attr("xlink:href", function(d) {return d.url;})
      .attr()
      .attr("x", 0)
      .attr("y", function(d) {return (d.row - 1) * (height / 6) + margin.bottom;})
      /*.attr("width", "100%")
      .attr("height",  ((height - margin.bottom - margin.top) / 6))*/
      .attr("width", (height - margin.bottom) / 6)
      .attr("height", (height - margin.bottom) / 6)
    
    var colorScale = d3.scale.linear(d3.interpolateRdBu)
                //       .domain([-1, 1]);
                .domain([-50, 0, 50])
                .range(["red", "white", "blue"]);
        
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      /*.each(function(d) {
          // Reference:
          // [1] https://stackoverflow.com/questions/16429199/selections-in-d3-how-to-use-parentnode-appendchild
          var g = d3.select(this); // Grab the svg we're creating
          var svg_path = d.url;    // Get the file path for this piece's SVG
          d3.xml(svg_path).mimeType("image/svg+xml").get(function(error, xml){
                  g.node().appendChild(xml.documentElement);
                });
        })*/
      .attr("x", function(d) {return (d.Column - 1) * (width / (data.length / 6)) + margin.left + pieceWidth;})
      .attr("y", function(d) {return (d.Row - 1) * (height / 6) + margin.bottom;})
      .attr("width", Math.floor(width * 6 / data.length))
      .attr("height", Math.floor(height / 6))
      .attr("fill", function(d) {
        return colorScale(d.Weirdness);
      })
      .on("mouseover",function(d) {
        d3.select(this).attr('stroke', 'black')
                       .attr('stroke-width', '1px');
        
      })
      .on("mouseout",function(d) {
        d3.select(this).attr('stroke', 'none')
                       .attr('stroke-width', '1px');
      })
      .on("click", function(d) {
        //CONFIG['grandmaster'] = d.Name;
        d3.select("#json_sources").property('value', d.Name);
        update_board();
        update_player_info();
        //console.log(d.Name);
    })

        
    })
}

draw();
