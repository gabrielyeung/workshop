

var getLineChart = function() {
    var lineChartData = {
        labels : ["S","M","T","W","R","F","Sa","S","M","T","W","R","F","Sa"],
        datasets : [
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,0.2)",
                pointStrokeColor : "rgba(151,187,205,1)",
                data : [3,6,8,7,6,9,11,13,14,18,19,15,14,15]
            }
        ]
    };
    var lineCharOptions = {
        scaleOverride: true,
        scaleSteps: 4,
        scaleStepWidth: 5,
        scaleStartValue: 0,
        scaleFontStyle : "bold",
        scaleFontSize : 24
    };
    var myLine = new Chart(document.getElementById("myChart").getContext("2d")).Line(lineChartData, lineCharOptions);
}

var getRadarChart = function() {
	var data = {
			labels : ["Breakfast","Snack","Lunch","Happy Hour","Dinner","Munch","Late Night"],
			datasets : [
				{
					fillColor : "rgba(184,0,0,0.15)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(184,0,0,0.2)",
					pointStrokeColor : "rgba(184,0,0,0.2)",
					data : [25,59,40,81,56,55,80]
				},
				{
					fillColor : "rgba(71,122,0,0.5)",
					strokeColor : "rgba(71,122,0,0.6)",
					pointColor : "rgba(71,122,0,0.6)",
					pointStrokeColor : "rgba(71,122,0,0.6)",
					data : [38,48,70,19,96,27,30]
				}
			]
		};
    var options = {
            scaleFontStyle : "bold",
            scaleFontSize : 24
        };
    var ctx = $("#myRadarChart").get(0).getContext("2d");
    var myRadar = new Chart(ctx).Radar(data, options);
}

getLineChart();
getRadarChart();
