$(document).ready(function() {

    var processed_json = new Array();   

    var optionsb = {
        title: {
            text: 'Bishop Wierdness'
        },

        chart: {
            renderTo: 'compare_players_b',
            type: 'line'
        },
        yaxis: {
            title: {
                text: 'Deviation'
            }
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

    var optionsp = {
        title: {
            text: 'Pawn Wierdness'
        },

        chart: {
            renderTo: 'compare_players_p',
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


    var optionsr = {
        title: {
            text: 'Rook Wierdness'
        },

        chart: {
            renderTo: 'compare_players_r',
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

    var optionsq = {
        title: {
            text: 'Queen Wierdness'
        },

        chart: {
            renderTo: 'compare_players_q',
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

    var optionsk = {
        title: {
            text: 'King Wierdness'
        },

        chart: {
            renderTo: 'compare_players_k',
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

        //load data for each piece
        all_data_b = data['b']['white_moves_deviation']
        all_data_p = data['p']['white_moves_deviation']
        //all_data_n = data['n']['white_moves_deviation']
        all_data_r = data['r']['white_moves_deviation']
        all_data_q = data['q']['white_moves_deviation']
        all_data_k = data['k']['white_moves_deviation']


        // BISHOP CHART SETUP
        // MAKE AN ARRAY CONTAINING THE DATA
        var allplayersArrayb = []; // This will be the resulting array
        for(var key in all_data_b) {
            var entry = d3.values(all_data_b[key]); // values
            entry.name = key; // key?
            allplayersArrayb.push(entry)
        }

        for (i = 0; i < 238; i++){
            optionsb.series[i].name = allplayersArrayb[i].name
            optionsb.series[i].data = allplayersArrayb[i]
        }
        var chart = new Highcharts.Chart(optionsb);

        // PAWN CHART SETUP
        // MAKE AN ARRAY CONTAINING THE DATA
        var allplayersArrayp = []; // This will be the resulting array
        for(var key in all_data_p) {
            var entry = d3.values(all_data_p[key]); // values
            entry.name = key; // key?
            allplayersArrayp.push(entry)
        }

        for (i = 0; i < 238; i++){
            optionsp.series[i].name = allplayersArrayp[i].name
            optionsp.series[i].data = allplayersArrayp[i]
        }
        var chart = new Highcharts.Chart(optionsp);

        // ROOK CHART SETUP
        // MAKE AN ARRAY CONTAINING THE DATA
        var allplayersArrayr = []; // This will be the resulting array
        for(var key in all_data_r) {
            var entry = d3.values(all_data_r[key]); // values
            entry.name = key; // key?
            allplayersArrayr.push(entry)
        }

        for (i = 0; i < 238; i++){
            optionsr.series[i].name = allplayersArrayr[i].name
            optionsr.series[i].data = allplayersArrayr[i]
        }
        var chart = new Highcharts.Chart(optionsr);

        // KING CHART SETUP
        // MAKE AN ARRAY CONTAINING THE DATA
        var allplayersArrayk = []; // This will be the resulting array
        for(var key in all_data_k) {
            var entry = d3.values(all_data_k[key]); // values
            entry.name = key; // key?
            allplayersArrayk.push(entry)
        }

        for (i = 0; i < 238; i++){
            optionsk.series[i].name = allplayersArrayk[i].name
            optionsk.series[i].data = allplayersArrayk[i]
        }
        var chart = new Highcharts.Chart(optionsk);

        // QUEEN CHART SETUP
        // MAKE AN ARRAY CONTAINING THE DATA
        var allplayersArrayq = []; // This will be the resulting array
        for(var key in all_data_q) {
            var entry = d3.values(all_data_q[key]); // values
            entry.name = key; // key?
            allplayersArrayq.push(entry)
        }

        for (i = 0; i < 238; i++){
            optionsq.series[i].name = allplayersArrayq[i].name
            optionsq.series[i].data = allplayersArrayq[i]
        }
        var chart = new Highcharts.Chart(optionsq);

    });

});
