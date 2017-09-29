//range triggers in range v1 page
'use strict'
var a;
$("#range-1").range({
    min: 0,
    max: 10,
    start: 5,
    onChange: function (b) {
        a = b;
        //$(".thumb").popup({
        //    transition: "vertical flip",
        //    hoverable: true,
        //    position: "top center",
        //    delay: {
        //        show: 100,
        //        hide: 100
        //    },
        //    title: b
        //});
    }
});
$("#range-2").range({
    min: 0,
    max: 10,
    start: 5,
    input: "#input-2"
});
var b = '<i class="notched circle loading icon green"></i> wait...';
$("#range-3").range({
    min: 0,
    max: 10,
    start: 5,
    onChange: function (a) {
        $("#display-3").html(a);
    }
});
$("#range-4").range({
    min: 0,
    max: 10,
    start: 4,
    step: 2,
    input: "#input-4"
});
$("#range-5").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-red").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-orange").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-yellow").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-olive").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-green").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-teal").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-blue").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-violet").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-purple").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-pink").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-brown").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-grey").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-black").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-red-inverted").range({
    min: 0,
    max: 100,
    start: 5
});
$("#range-orange-inverted").range({
    min: 0,
    max: 80,
    start: 50
});
$("#range-yellow-inverted").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-olive-inverted").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-green-inverted").range({
    min: 0,
    max: 10,
    start: 5
});
$("#range-teal-inverted").range({
    min: 0,
    max: 10,
    start: 6
});
$("#range-blue-inverted").range({
    min: 0,
    max: 10,
    start: 9
});
$("#range-violet-inverted").range({
    min: 0,
    max: 10,
    start: 2
});
$("#range-purple-inverted").range({
    min: 0,
    max: 10,
    start: 8
});
$("#range-pink-inverted").range({
    min: 0,
    max: 10,
    start: 4
});
$("#range-brown-inverted").range({
    min: 0,
    max: 10,
    start: 7
});
$("#range-grey-inverted").range({
    min: 0,
    max: 10,
    start: 3
});
$("#range-black-inverted").range({
    min: 0,
    max: 10,
    start: 1
});