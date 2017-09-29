//chart page charts settings
'use strict';
var piedata = [
{
    value: 300,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Red"
},
{
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
},
{
    value: 100,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
}
]

var radarChartData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "#fff",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

var polarData = [
       {
           value: 20,
           color: "#F7464A",
           highlight: "#FF5A5E",
           label: "Red"
       },
       {
           value: 4,
           color: "#46BFBD",
           highlight: "#5AD3D1",
           label: "Green"
       },
       {
           value: 18,
           color: "#FDB45C",
           highlight: "#FFC870",
           label: "Yellow"
       },
       {
           value: 10,
           color: "#949FB1",
           highlight: "#A8B3C5",
           label: "Grey"
       },
       {
           value: 15,
           color: "#4D5360",
           highlight: "#616774",
           label: "Dark Grey"
       }

];

var lineChartdata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
var barChartdata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
window.onload = function () {
    window.myRadar = new Chart(document.getElementById("radar").getContext("2d")).Radar(radarChartData, {
        responsive: true,
    });

    var ctx1 = document.getElementById("chart-area").getContext("2d");

    window.myPolarArea = new Chart(ctx1).PolarArea(polarData, {
        responsive: true,
    });
    var ctx2 = document.getElementById("line-area").getContext("2d");
    var myLineChart = new Chart(ctx2).Line(lineChartdata, {
        responsive: true,
        maintainAspectRatio: true
    });

    var ctx3 = document.getElementById("bar-area").getContext("2d");
    var myLineChart = new Chart(ctx3).Bar(barChartdata, {
        responsive: true,
        maintainAspectRatio: true
    });
    var ctx4 = document.getElementById("pie-area").getContext("2d");
    var ctx5 = document.getElementById("donut-area").getContext("2d");
    // For a pie chart
    var myPieChart = new Chart(ctx4).Pie(piedata, {
        responsive: true,
    });

    // And for a doughnut chart
    var myDoughnutChart = new Chart(ctx5).Doughnut(piedata, {
        responsive: true,
    });
}