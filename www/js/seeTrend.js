

var getLineChart = function() {
    var lineChartData = {
        labels : ["S","M","T","W","R","F","Sa","S","M","T","W","R","F","Sa"],
        datasets : [
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [3,6,8,7,6,9,11,13,14,18,19,15,14,15]
            }
        ]
    };
    var lineCharOptions = {
        scaleOverride: true,
        scaleSteps: 4,
        scaleStepWidth: 5,
        scaleStartValue: 0
    };
    var myLine = new Chart(document.getElementById("myChart").getContext("2d")).Line(lineChartData, lineCharOptions);
}

var getRadarChart = function() {
	var data = {
			labels : ["Breakfast","Snack","Lunch","Happy Hour","Dinner","Munch","Late Night"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [65,59,90,81,56,55,40]
				},
				{
					fillColor : "rgba(71,122,0,0.5)",
					strokeColor : "rgba(71,122,0,0.6)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [28,48,40,19,96,27,100]
				}
			]
		};
    var ctx = $("#myRadarChart").get(0).getContext("2d");
    var myRadar = new Chart(ctx).Radar(data);
}


getLineChart();
getRadarChart();