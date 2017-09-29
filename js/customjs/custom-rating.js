//rating page triggers
'use strict'
// A $( document ).ready() block.
$(document).ready(function () {
    $('.ui.segment .clr').rating('setting', 'clearable', true);//clerable rating trigger
    $('.dsbl').rating('disable');//disable rating trigger
});