$(document).ready(function() {

    var processed_json = new Array();   

    var options = {
        title: {
        text: 'Player Wierdness'
    },

        chart: {
            renderTo: 'compare_players',
            type: 'line'
        },
        series: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
        {},{},{},{},{},{},{},{},{}],
        dashStyle: 'longdash'
        
    };

    $.getJSON('./data/master_player_comparison.json', function(data) {

        adams_data = data['all']['white_moves_deviation']['Adams'];
        all_data = data['all']['white_moves_deviation']

        // TRY TO MAKE AN ARRAY CONTAINING THE DATA

        var allplayersArray = []; // This will be the resulting array
        for(var key in all_data) {
            var entry = d3.values(all_data[key]); // values
            entry.name = key; // key?
            allplayersArray.push(entry)
            }

        console.log("allplayersArray",allplayersArray)
        console.log("d3.values(allplayersArray)",d3.values(allplayersArray[0]))

        for (i = 0; i < 42; i++){
            options.series[i].name = allplayersArray[i].name
            options.series[i].data = allplayersArray[i]
    }
        // options.series[0].data = d3.values(adams_data);
        var chart = new Highcharts.Chart(options);
    });

});