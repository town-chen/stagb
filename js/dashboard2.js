'use strict'
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 60,
        time: 1000
    });
    var e = [
            [0, 57],
            [1, 58],
            [2, 93],
            [3, 11],
            [4, 40],
            [5, 93],
            [6, 29],
            [7, 19],
            [8, 87],
            [9, 14],
            [10, 130],
            [11, 91],
            [12, 80],
            [13, 49],
            [14, 59]
        ],
        t = [{
            label: "Orders",
            data: e,
            color: "#17A88B",
            lines: {
                show: !0,
                lineWidth: 2
            },
            curvedLines: {
                apply: !0,
                monotonicFit: !0
            }
        }, {
            data: e,
            color: "#17A88B",
            lines: {
                show: !0,
                lineWidth: 0
            }
        }],
        o = {
            series: {
                curvedLines: {
                    active: !0
                },
                shadowSize: 0
            },
            grid: {
                hoverable: !0,
                borderWidth: 0
            },
            xaxis: {
                ticks: 0,
                color: 3
            },
            yaxis: {
                ticks: 0
            },
            tooltip: {
                show: true
            },
            legend: {
                show: !1
            }
        };
    $.plot($("#flot-order"), t, o), $("#flot-order").on("plothover", function(e, t, o) {
        o ? $(".flotTip").text("Orders: " + o.datapoint[1].toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")).css({
            top: o.pageY + 15,
            left: o.pageX + 10
        }).show() : $(".flotTip").hide()
    });
    var i = [
            [0, 755],
            [1, 1133],
            [2, 1234],
            [3, 1448],
            [4, 1198],
            [5, 918],
            [6, 583],
            [7, 842],
            [8, 540],
            [9, 665],
            [10, 1195],
            [11, 742],
            [12, 1040],
            [13, 682],
            [14, 1190]
        ],
        a = [{
            label: "Revenue",
            data: i,
            color: "#0667D6",
            lines: {
                show: !0,
                lineWidth: 2
            },
            curvedLines: {
                apply: !0,
                monotonicFit: !0
            }
        }, {
            data: i,
            color: "#0667D6",
            lines: {
                show: !0,
                lineWidth: 0
            }
        }],
        s = {
            series: {
                curvedLines: {
                    active: !0
                },
                shadowSize: 0
            },
            grid: {
                hoverable: !0,
                borderWidth: 0
            },
            xaxis: {
                ticks: 0
            },
            yaxis: {
                ticks: 0
            },
            tooltip: {
                show: !1
            },
            legend: {
                show: !1
            }
        };
    $.plot($("#flot-avarage"), a, s), $("#flot-avarage").on("plothover", function(e, t, o) {
        o ? $(".flotTip").text("Avarage: %" + o.datapoint[1].toFixed(0).toString()).css({
            top: o.pageY + 15,
            left: o.pageX + 10
        }).show() : $(".flotTip").hide()
    });
    var l = [
            [0, 764],
            [1, 567],
            [2, 326],
            [3, 964],
            [4, 769],
            [5, 655],
            [6, 453],
            [7, 567],
            [8, 876],
            [9, 645],
            [10, 348],
            [11, 854],
            [12, 580],
            [13, 876],
            [14, 1190]
        ],
        n = [{
            label: "User",
            data: l,
            color: "#8E23E0",
            lines: {
                show: !0,
                lineWidth: 2
            },
            curvedLines: {
                apply: !0,
                monotonicFit: !0
            }
        }, {
            data: l,
            color: "#8E23E0",
            lines: {
                show: !0,
                lineWidth: 0
            }
        }],
        r = {
            series: {
                curvedLines: {
                    active: !0
                },
                shadowSize: 0
            },
            grid: {
                hoverable: !0,
                borderWidth: 0
            },
            xaxis: {
                ticks: 0
            },
            yaxis: {
                ticks: 0
            },
            tooltip: {
                show: true
            },
            legend: {
                show: !1
            }
        };
    $.plot($("#flot-saves"), n, r), $("#flot-saves").on("plothover", function(e, t, o) {
        o ? $(".flotTip").text("Saves: " + o.datapoint[1].toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")).css({
            top: o.pageY + 15,
            left: o.pageX + 10
        }).show() : $(".flotTip").hide()
    });
    var d = [
            [0, 567],
            [1, 174],
            [2, 467],
            [3, 829],
            [4, 489],
            [5, 360],
            [6, 380],
            [7, 907],
            [8, 549],
            [9, 765],
            [10, 479],
            [11, 783],
            [12, 357],
            [13, 985],
            [14, 370]
        ],
        c = [{
            label: "Feedback",
            data: d,
            color: "#E5343D",
            lines: {
                show: !0,
                lineWidth: 2
            },
            curvedLines: {
                apply: !0,
                monotonicFit: !0
            }
        }, {
            data: d,
            color: "#E5343D",
            lines: {
                show: !0,
                lineWidth: 0
            }
        }],
        h = {
            series: {
                curvedLines: {
                    active: !0
                },
                shadowSize: 0
            },
            grid: {
                hoverable: !0,
                borderWidth: 0
            },
            xaxis: {
                ticks: 0
            },
            yaxis: {
                ticks: 0
            },
            tooltip: {
                show: !1
            },
            legend: {
                show: !1
            }
        };
    $.plot($("#flot-view"), c, h), $("#flot-view").on("plothover", function(e, t, o) {
        o ? $(".flotTip").text("Views: " + o.datapoint[1].toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")).css({
            top: o.pageY + 15,
            left: o.pageX + 10
        }).show() : $(".flotTip").hide()
    });
    var p = [
            [0, 87],
            [1, 85],
            [2, 90],
            [3, 86]
        ],
        m = [
            [0, 69],
            [1, 71],
            [2, 75],
            [3, 70]
        ],
        f = [{
            label: "Maximum Temperature",
            data: p,
            color: "#1F364F",
            lines: {
                show: !0,
                lineWidth: 2
            },
            curvedLines: {
                apply: !0,
                monotonicFit: !0
            }
        }, {
            data: p,
            color: "#1F364F",
            lines: {
                show: !0,
                lineWidth: 0
            },
            points: {
                show: !0
            }
        }, {
            label: "Minimum Temperature",
            data: m,
            color: "#1F364F",
            lines: {
                show: !0,
                lineWidth: 2
            },
            curvedLines: {
                apply: !0,
                monotonicFit: !0
            }
        }, {
            data: m,
            color: "#1F364F",
            lines: {
                show: !0,
                lineWidth: 0
            },
            points: {
                show: !0
            }
        }],
        v = {
            series: {
                curvedLines: {
                    active: !0
                },
                shadowSize: 0
            },
            grid: {
                hoverable: !0,
                borderWidth: 0
            },
            xaxis: {
                ticks: 0
            },
            yaxis: {
                ticks: 0
            },
            tooltip: {
                show: !1
            },
            legend: {
                show: !1
            }
        };
    $.plot($("#flot-weather"), f, v), $("#flot-weather").on("plothover", function(e, t, o) {
        o ? $(".flotTip").text(o.datapoint[1].toFixed(0) + "F").css({
            top: o.pageY + 15,
            left: o.pageX + 10
        }).show() : $(".flotTip").hide()
    });
    var u = [
            [0, 3424],
            [1, 4355],
            [2, 3216],
            [3, 1435],
            [4, 5467],
            [5, 4356],
            [6, 2978],
            [7, 972],
            [8, 1230],
            [9, 1900],
            [10, 4398],
            [11, 5690],
            [12, 3980],
            [13, 4329],
            [14, 1240]
        ],
        g = [{
            label: "Profile",
            data: u,
            color: "#1F364F",
            lines: {
                show: !0,
                lineWidth: 2
            },
            curvedLines: {
                apply: !0,
                monotonicFit: !0
            }
        }, {
            data: u,
            color: "#1F364F",
            lines: {
                show: !0,
                lineWidth: 0
            }
        }],
        w = {
            series: {
                curvedLines: {
                    active: !0
                },
                shadowSize: 0
            },
            grid: {
                hoverable: !0,
                borderWidth: 0
            },
            xaxis: {
                ticks: 0
            },
            yaxis: {
                ticks: 0
            },
            tooltip: {
                show: !1
            },
            legend: {
                show: !1
            }
        };

    $.plot($("#flot-profile"), g, w), $("#flot-profile").on("plothover", function(e, t, o) {
        o ? $(".flotTip").text("Views: " + o.datapoint[1].toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")).css({
            top: o.pageY + 15,
            left: o.pageX + 10
        }).show() : $(".flotTip").hide()
    });

    if ($('#chart_1').length > 0) {
        var ctx1 = document.getElementById("chart_1").getContext("2d");
        var data1 = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                    label: "Sun",
                    backgroundColor: "rgba(238, 206, 83, 0.9)",

                    pointHighlightStroke: "rgba(60,184,120,1)",
                    data: [40, 28, 5, 12, 20, 16, 40]
                },
                {
                    label: "Wind",
                    backgroundColor: "rgba(93, 159, 247, 0.9)",

                    pointBackgroundColor: "rgba(252,176,59,0.4)",
                    data: [80, 48, 36, 19, 52, 27, 15],
                },
                {
                    label: "Rain",
                    backgroundColor: "rgba(219, 80, 74, 0.86)",

                    pointBackgroundColor: "rgba(252,176,59,0.4)",
                    data: [20, 60, 10, 19, 56, 27, 10],
                }
            ]
        };

        var areaChart = new Chart(ctx1, {
            type: "line",
            data: data1,

            options: {
                tooltips: {
                    mode: "label"
                },
                elements: {
                    point: {
                        hitRadius: 10
                    }
                },

                scales: {
                    yAxes: [{
                        stacked: false,
                        gridLines: {
                            color: "#eee",
                        },
                        ticks: {
                            fontColor: "#2f2c2c"
                        }
                    }],
                    xAxes: [{
                        stacked: false,
                        gridLines: {
                            color: "#eee",
                        },
                        ticks: {
                            fontColor: "#2f2c2c"
                        }
                    }]
                },
                animation: {
                    duration: 3000
                },
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                tooltips: {
                    backgroundColor: 'rgba(47,44,44,.9)',
                    cornerRadius: 0,
                }
            }
        });
    }


});

//dashboard page loading segment trigger
$(".refreshing").on("click", function() {
    $(".dimmer").addClass("active").delay(1500).queue(function() {
        $(".dimmer").removeClass("active").dequeue();
    });
});
//dashboard page loading segment trigger

//Pace Loading (On Navbar) Function
function paceLoading() {
    var paceOptions = {
        restartOnRequestAfter: false
    };

    $(document).ajaxStart(function() {
        Pace.restart();
    });
}
//Pace Loading (On Navbar) Function


'use strict';

$(document).ready(function() {

    // Make some random data for the Chart
    var d1 = [];
    for (var i = 0; i <= 10; i += 1) {
        d1.push([i, parseInt(Math.random() * 30)]);
    }
    var d2 = [];
    for (var i = 0; i <= 25; i += 4) {
        d2.push([i, parseInt(Math.random() * 30)]);
    }
    var d3 = [];
    for (var i = 0; i <= 10; i += 1) {
        d3.push([i, parseInt(Math.random() * 30)]);
    }

    // Chart Options
    var options = {
        series: {
            shadowSize: 0,
            curvedLines: {
                apply: true,
                active: true,
                monotonicFit: true
            },
            lines: {
                show: false,
                lineWidth: 0
            }
        },
        grid: {
            borderWidth: 0,
            labelMargin: 10,
            hoverable: true,
            clickable: true,
            mouseActiveRadius: 6

        },
        xaxis: {
            tickDecimals: 0,
            ticks: false
        },

        yaxis: {
            tickDecimals: 0,
            ticks: false
        },

        legend: {
            show: false
        }
    };

    // Let's create the chart
    if ($("#chart-curved-line")[0]) {
        $.plot($("#chart-curved-line"), [{
            data: d1,
            lines: {
                show: true,
                fill: 0.98
            },
            label: 'Product 1',
            stack: true,
            color: '#52489C'
        }, {
            data: d3,
            lines: {
                show: true,
                fill: 0.98
            },
            label: 'Product 2',
            stack: true,
            color: '#59C3C3'
        }], options);
    }

    if ($("#chart-past-days")[0]) {
        $.plot($("#chart-past-days"), [{
            data: d2,
            lines: {
                show: true,
                fill: 1,
            },
            label: 'Product 1',
            stack: true,
            color: '#35424b'
        }], options);
    }

    // Tooltips for Flot Charts
    if ($('.flot-chart')[0]) {
        $('.flot-chart').on('plothover', function(event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                $('.flot-tooltip').html(item.series.label + ' of ' + x + ' = ' + y).css({ top: item.pageY + 5, left: item.pageX + 5 }).show();
            } else {
                $('.flot-tooltip').hide();
            }
        });

        $('<div class="flot-tooltip"></div>').appendTo('body');
    }

    $('#sidebar_progress1').progress({
        duration: 200,
        total: 200,
        percent: 45
    });
    $('#sidebar_progress2').progress({
        duration: 200,
        total: 200,
        percent: 68
    });
    $('#sidebar_progress3').progress({
        duration: 200,
        total: 200,
        percent: 36
    });
});