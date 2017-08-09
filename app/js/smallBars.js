//Width and height
var full_h = 300
var w = 200;
var h = 250;
var topPadding = 10;
var barPadding = 5;

//var player_choice = d3.select("#player_choice")
var draw = function() {
  d3.json("./data/json/weirdness_sample_data.json", function(err, data) {
    
    drawPlayer = function(data) {
      
      // Remove SVG element if exists
      
      //Create SVG element
      var svg = d3.select("#bar_charts")
            .append("svg")
            .attr("width", w)
            .attr("height", full_h);
     
     // Add grandmaster's name
     // Linear scale, used on absolute value
     var barScale = d3.scale.linear()
                      .domain([0, 100])
                      .range([0, w / 2]);
     var colorScale = d3.scale.linear()
                        .domain([-100, 0, 100])
                        .range(["red", "white", "blue"]);

      var getXValue = function(d) {
        if (d >= 0) {
          return w / 2;
        } else {
          return w / 2 - barScale(Math.abs(d));
        }
      }
      
      svg.append("text")
         .text(data.Name
         )
         .attr("x", w / 2)
         .attr("y", (full_h - h) / 2)
         .style("text-anchor", "middle")
         .attr("font-family", "sans-serif")
         .attr("font-size", "20px")
         .attr("fill", "grey");
      
      svg.selectAll("rect")
         .data(data.Data)
         .enter()
         .append("rect")
         .attr("x", function(d) {
            return getXValue(d.Weirdness);
         })
         .attr("y", function(d, i) {
            return (full_h - h) + i * (h / data.Data.length);
         })
         .attr("width", function(d) {
            return barScale(Math.abs(d.Weirdness));
         })
         .attr("height", function(d, i) {
            return (h / data.Data.length) - barPadding;
         })
         .attr("fill", function(d) {
          if (d.Weirdness < 0) {
            return "#cc0000";
          } else {
            return "#4db8ff";
          }
         });
      
       svg.append("line")
         .attr("x1", w/2)
         .attr("x2", w/2)
         .attr("y1", full_h - barPadding)
         .attr("y2", full_h - h)
         .attr("stroke", "black")
         .attr("stroke-width", 1);
      
    }
    for (i = 0; i < data.Players.length; i++) {
      drawPlayer(data.Players[i]);
    } 
  })
}
draw();
