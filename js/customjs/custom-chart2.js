'use strict'
var chart;
//chart page 2 charts settings
new Chartist.Line('.ct-chart1', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
}, {
    fullWidth: true,
    chartPadding: {
        right: 40
    }
});

var chart1 = new Chartist.Line('.ct-chart2', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    series: [
      [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
      [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
      [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
    ]
}, {
    fullWidth: true,
    chartPadding: {
        right: 10
    },
    low: 0
});

new Chartist.Line('.ct-chart3', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [1, 2, 3, 1, -2, 0, 1, 0],
      [-2, -1, -2, -1, -3, -1, -2, -1],
      [0, 0, 0, 1, 2, 3, 2, 1],
      [3, 2, 1, 0.5, 1, 0, -1, -3]
    ]
}, {
    high: 3,
    low: -3,
    fullWidth: true,
    // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
    axisY: {
        onlyInteger: true,
        offset: 20
    }
});

var times = function (n) {
    return Array.apply(null, new Array(n));
};

var data = times(52).map(Math.random).reduce(function (data, rnd, index) {
    data.labels.push(index + 1);
    data.series.forEach(function (series) {
        series.push(Math.random() * 100)
    });

    return data;
}, {
    labels: [],
    series: times(4).map(function () { return new Array() })
});

var options = {
    showLine: false,
    axisX: {
        labelInterpolationFnc: function (value, index) {
            return index % 13 === 0 ? 'W' + value : null;
        }
    }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
      axisX: {
          labelInterpolationFnc: function (value, index) {
              return index % 4 === 0 ? 'W' + value : null;
          }
      }
  }]
];

new Chartist.Line('.ct-chart4', data, options, responsiveOptions);
new Chartist.Line('.ct-chart5', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [5, 9, 7, 8, 5, 3, 5, 4]
    ]
}, {
    low: 0,
    showArea: true
});
new Chartist.Line('.ct-chart6', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [1, 2, 3, 1, -2, 0, 1, 0],
      [-2, -1, -2, -1, -2.5, -1, -2, -1],
      [0, 0, 0, 1, 2, 2.5, 2, 1],
      [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
    ]
}, {
    high: 3,
    low: -3,
    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
    axisX: {
        showLabel: false,
        showGrid: false
    }
});

var chart7 = new Chartist.Line('.ct-chart7', {
    labels: [1, 2, 3, 4, 5],
    series: [
      [12, 9, 7, 8, 5]
    ]
});

// Listening for draw events that get emitted by the Chartist chart
chart7.on('draw', function (data) {
    // If the draw event was triggered from drawing a point on the line chart
    if (data.type === 'point') {
        // We are creating a new path SVG element that draws a triangle around the point coordinates
        var triangle = new Chartist.Svg('path', {
            d: ['M',
              data.x,
              data.y - 15,
              'L',
              data.x - 15,
              data.y + 8,
              'L',
              data.x + 15,
              data.y + 8,
              'z'].join(' '),
            style: 'fill-opacity: 1'
        }, 'ct-area');

        // With data.element we get the Chartist SVG wrapper and we can replace the original point drawn by Chartist with our newly created triangle
        data.element.replace(triangle);
    }
});

var chart8 = new Chartist.Line('.ct-chart8', {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [
      [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
      [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
      [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
      [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
    ]
}, {
    low: 0
});

// Let's put a sequence number aside so we can use it in the event callbacks
var seq = 0,
  delays = 80,
  durations = 500;

// Once the chart is fully created we reset the sequence
chart8.on('created', function () {
    seq = 0;
});

// On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
chart8.on('draw', function (data) {
    seq++;

    if (data.type === 'line') {
        // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
        data.element.animate({
            opacity: {
                // The delay when we like to start the animation
                begin: seq * delays + 1000,
                // Duration of the animation
                dur: durations,
                // The value where the animation should start
                from: 0,
                // The value where it should end
                to: 1
            }
        });
    } else if (data.type === 'label' && data.axis === 'x') {
        data.element.animate({
            y: {
                begin: seq * delays,
                dur: durations,
                from: data.y + 100,
                to: data.y,
                // We can specify an easing function from Chartist.Svg.Easing
                easing: 'easeOutQuart'
            }
        });
    } else if (data.type === 'label' && data.axis === 'y') {
        data.element.animate({
            x: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 100,
                to: data.x,
                easing: 'easeOutQuart'
            }
        });
    } else if (data.type === 'point') {
        data.element.animate({
            x1: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 10,
                to: data.x,
                easing: 'easeOutQuart'
            },
            x2: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 10,
                to: data.x,
                easing: 'easeOutQuart'
            },
            opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
            }
        });
    } else if (data.type === 'grid') {
        // Using data.axis we get x or y which we can use to construct our animation definition objects
        var pos1Animation = {
            begin: seq * delays,
            dur: durations,
            from: data[data.axis.units.pos + '1'] - 30,
            to: data[data.axis.units.pos + '1'],
            easing: 'easeOutQuart'
        };

        var pos2Animation = {
            begin: seq * delays,
            dur: durations,
            from: data[data.axis.units.pos + '2'] - 100,
            to: data[data.axis.units.pos + '2'],
            easing: 'easeOutQuart'
        };

        var animations = {};
        animations[data.axis.units.pos + '1'] = pos1Animation;
        animations[data.axis.units.pos + '2'] = pos2Animation;
        animations['opacity'] = {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart'
        };

        data.element.animate(animations);
    }
});

// For the sake of the example we update the chart every time it's created with a delay of 10 seconds
chart8.on('created', function () {
    if (window.__exampleAnimateTimeout) {
        clearTimeout(window.__exampleAnimateTimeout);
        window.__exampleAnimateTimeout = null;
    }
    window.__exampleAnimateTimeout = setTimeout(chart8.update.bind(chart8), 12000);
});


var chart9 = new Chartist.Line('.ct-chart9', {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    series: [
      [1, 5, 2, 5, 4, 3],
      [2, 3, 4, 8, 1, 2],
      [5, 4, 3, 2, 1, 0.5]
    ]
}, {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true
});

chart9.on('draw', function (data) {
    if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
            d: {
                begin: 2000 * data.index,
                dur: 2000,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
            }
        });
    }
});
var chart10 = new Chartist.Line('.ct-chart10', {
    labels: [1, 2, 3, 4, 5],
    series: [
      [1, 5, 10, 0, 1],
      [10, 15, 0, 1, 2]
    ]
}, {
    // Remove this configuration to see that chart rendered with cardinal spline interpolation
    // Sometimes, on large jumps in data values, it's better to use simple smoothing.
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
    }),
    fullWidth: true,
    chartPadding: {
        right: 20
    },
    low: 0
});

var chart11 = new Chartist.Line('.ct-chart11', {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    // Naming the series with the series object array notation
    series: [{
        name: 'series-1',
        data: [5, 2, -4, 2, 0, -2, 5, -3]
    }, {
        name: 'series-2',
        data: [4, 3, 5, 3, 1, 3, 6, 4]
    }, {
        name: 'series-3',
        data: [2, 4, 3, 1, 4, 5, 3, 2]
    }]
}, {
    fullWidth: true,
    // Within the series options you can use the series names
    // to specify configuration that will only be used for the
    // specific series.
    series: {
        'series-1': {
            lineSmooth: Chartist.Interpolation.step()
        },
        'series-2': {
            lineSmooth: Chartist.Interpolation.simple(),
            showArea: true
        },
        'series-3': {
            showPoint: false
        }
    }
}, [
// You can even use responsive configuration overrides to
// customize your series configuration even further!
['screen and (max-width: 320px)', {
    series: {
        'series-1': {
            lineSmooth: Chartist.Interpolation.none()
        },
        'series-2': {
            lineSmooth: Chartist.Interpolation.none(),
            showArea: false
        },
        'series-3': {
            lineSmooth: Chartist.Interpolation.none(),
            showPoint: true
        }
    }
}]
]);

var data12 = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
};

var options12 = {
    high: 10,
    low: -10,
    axisX: {
        labelInterpolationFnc: function (value, index) {
            return index % 2 === 0 ? value : null;
        }
    }
};

new Chartist.Bar('.ct-chart12', data12, options12);

var data13 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
};

var options13 = {
    seriesBarDistance: 10
};

var responsiveOptions13 = [
  ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
          labelInterpolationFnc: function (value) {
              return value[0];
          }
      }
  }]
];

new Chartist.Bar('.ct-chart13', data13, options13, responsiveOptions13);

// Create a simple bi-polar bar chart
var chart14 = new Chartist.Bar('.ct-chart14', {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
}, {
    high: 10,
    low: -10,
    axisX: {
        labelInterpolationFnc: function (value, index) {
            return index % 2 === 0 ? value : null;
        }
    }
});

// Listen for draw events on the bar chart
chart14.on('draw', function (data) {
    // If this draw event is of type bar we can use the data to create additional content
    if (data.type === 'bar') {
        // We use the group element of the current series to append a simple circle with the bar peek coordinates and a circle radius that is depending on the value
        data.group.append(new Chartist.Svg('circle', {
            cx: data.x2,
            cy: data.y2,
            r: Math.abs(Chartist.getMultiValue(data.value)) * 2 + 5
        }, 'ct-slice-pie'));
    }
});

new Chartist.Bar('.ct-chart15', {
    labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
    series: [
      [60000, 40000, 80000, 70000],
      [40000, 30000, 70000, 65000],
      [8000, 3000, 10000, 6000]
    ]
}, {
    seriesBarDistance: 10,
    axisX: {
        offset: 60
    },
    axisY: {
        offset: 80,
        labelInterpolationFnc: function (value) {
            return value + ' CHF'
        },
        scaleMinSpace: 15
    }
});
new Chartist.Bar('.ct-chart16', {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
      [800000, 1200000, 1400000, 1300000],
      [200000, 400000, 500000, 300000],
      [100000, 200000, 400000, 600000]
    ]
}, {
    stackBars: true,
    axisY: {
        labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
        }
    }
}).on('draw', function (data) {
    if (data.type === 'bar') {
        data.element.attr({
            style: 'stroke-width: 30px'
        });
    }
});
new Chartist.Bar('.ct-chart17', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4]
    ]
}, {
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: {
        offset: 70
    }
});

new Chartist.Bar('.ct-chart18', {
    labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
    series: [
      [5, 4, 3, 7],
      [3, 2, 9, 5],
      [1, 5, 8, 4],
      [2, 3, 4, 6],
      [4, 1, 2, 1]
    ]
}, {
    // Default mobile configuration
    stackBars: true,
    axisX: {
        labelInterpolationFnc: function (value) {
            return value.split(/\s+/).map(function (word) {
                return word[0];
            }).join('');
        }
    },
    axisY: {
        offset: 20
    }
}, [
// Options override for media > 400px
['screen and (min-width: 400px)', {
    reverseData: true,
    horizontalBars: true,
    axisX: {
        labelInterpolationFnc: Chartist.noop
    },
    axisY: {
        offset: 60
    }
}],
// Options override for media > 800px
['screen and (min-width: 800px)', {
    stackBars: false,
    seriesBarDistance: 10
}],
// Options override for media > 1000px
['screen and (min-width: 1000px)', {
    reverseData: false,
    horizontalBars: false,
    seriesBarDistance: 15
}]
]);
new Chartist.Bar('.ct-chart19', {
    labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    series: [20, 60, 120, 200, 180, 20, 10]
}, {
    distributeSeries: true
});
new Chartist.Bar('.ct-chart20', {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4]
    ]
}, {
    axisX: {
        // On the x-axis start means top and end means bottom
        position: 'start'
    },
    axisY: {
        // On the y-axis start means left and end means right
        position: 'end'
    }
});
var data21 = {
    series: [5, 3, 4]
};

var sum = function (a, b) { return a + b };

new Chartist.Pie('.ct-chart21', data21, {
    labelInterpolationFnc: function (value) {
        return Math.round(value / data21.series.reduce(sum) * 100) + '%';
    }
});
var data22 = {
    labels: ['Bananas', 'Apples', 'Grapes'],
    series: [20, 15, 40]
};

var options22 = {
    labelInterpolationFnc: function (value) {
        return value[0]
    }
};

var responsiveOptions22 = [
  ['screen and (min-width: 640px)', {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc: function (value) {
          return value;
      }
  }],
  ['screen and (min-width: 1024px)', {
      labelOffset: 80,
      chartPadding: 20
  }]
];

new Chartist.Pie('.ct-chart22', data22, options22, responsiveOptions22);

new Chartist.Pie('.ct-chart23', {
    series: [20, 10, 30, 40]
}, {
    donut: true,
    donutWidth: 60,
    startAngle: 270,
    total: 200,
    showLabel: false
});

var chart24 = new Chartist.Pie('.ct-chart24', {
    series: [10, 20, 50, 20, 5, 50, 15],
    labels: [1, 2, 3, 4, 5, 6, 7]
}, {
    donut: true,
    showLabel: false
});

chart24.on('draw', function (data) {
    if (data.type === 'slice') {
        // Get the total path length in order to use for dash array animation
        var pathLength = data.element._node.getTotalLength();

        // Set a dasharray that matches the path length as prerequisite to animate dashoffset
        data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });

        // Create animation definition while also assigning an ID to the animation for later sync usage
        var animationDefinition = {
            'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to: '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                fill: 'freeze'
            }
        };

        // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
        if (data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
        }

        // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
        data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
        });

        // We can't use guided mode as the animations need to rely on setting begin manually
        // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
        data.element.animate(animationDefinition, false);
    }
});

// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
chart24.on('created', function () {
    if (window.__anim21278907124) {
        clearTimeout(window.__anim21278907124);
        window.__anim21278907124 = null;
    }
    window.__anim21278907124 = setTimeout(chart24.update.bind(chart), 10000);
});