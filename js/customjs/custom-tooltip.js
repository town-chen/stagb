//tooltip settings in tooltip page
'use strict'
$(document).ready(function () {
    $(".demoeff1").popup({
        transition: "horizontal flip"//transition effect
    });
    $(".demoeff2").popup({
        transition: "vertical flip"//transition effect
    });
    $(".demoeff3").popup({
        transition: "fade up"//transition effect
    });
    $(".demoeff4").popup({
        transition: "fade"//transition effect
    });
    $(".demoeff5").popup({
        transition: "scale"//transition effect
    });
    popupactions();//this function in app page
});