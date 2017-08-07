
var makechart = function() {

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
            series: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
            dashStyle: 'longdash',

            tooltip: {
                pointFormat: '{series.name} {series.value}'
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                line: {
                    marker: {
                        enabled: false
                    }
                }
            }
        };

        $.getJSON('./data/master_player_comparison.json', function(data) {

        // console.log(d3.selectall(heatmap_piece))
        var piecetype = document.getElementById('heatmap_piece');
        console.log("JSON",piecetype.options[piecetype.selectedIndex].value)

        all_data = data['b']['white_moves_deviation']

        // TRY TO MAKE AN ARRAY CONTAINING THE DATA

        var allplayersArray = []; // This will be the resulting array
        for(var key in all_data) {
            var entry = d3.values(all_data[key]); // values
            entry.name = key; // key?
            allplayersArray.push(entry)
        }

        console.log("allplayersArray",allplayersArray)
        console.log("d3.values(allplayersArray)",d3.values(allplayersArray[0]))

        for (i = 0; i < 238; i++){
            options.series[i].name = allplayersArray[i].name
            options.series[i].data = allplayersArray[i]
        }
        
        var chart = new Highcharts.Chart(options);
    });

    });
}

makechart();
