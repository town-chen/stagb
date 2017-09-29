//porgress page triggers
'use strict'
$(".addbtn").on("click", function () {
    $('#example1')
    .progress('increment')
    ;
});
$(".unaddbtn").on("click", function () {
    $('#example1')
    .progress('decrement')
    ;
});

$(".addbtn10").on("click", function () {
    $('#example10')
    .progress('increment')
    ;
});
$(".unaddbtn10").on("click", function () {
    $('#example10')
    .progress('decrement')
    ;
});
$(".addbtn16").on("click", function () {
    $('.example16')
    .progress('increment')
    ;
});
$(".unaddbtn16").on("click", function () {
    $('.example16')
    .progress('decrement')
    ;
});

$(".progress").progress();