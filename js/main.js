'use strict'
var sideBarIsHide = false;
var ManuelSideBarIsHide = false;
var ManuelSideBarIsState = false;
$(".openbtn").on("click", function() {
    ManuelSideBarIsHide = true;
    if (!ManuelSideBarIsState) {
        resizeSidebar("1");
        ManuelSideBarIsState = true;
    } else {
        resizeSidebar("0");
        ManuelSideBarIsState = false;
    }
});


$(window).resize(function() {
    if (ManuelSideBarIsHide == false) {
        if ($(window).width() <= 767) {
            if (!sideBarIsHide); {
                resizeSidebar("1");
                sideBarIsHide = true;
                $(".colhidden").addClass("displaynone");

            }
        } else {
            if (sideBarIsHide); {
                resizeSidebar("0");
                sideBarIsHide = false;

                $(".colhidden").removeClass("displaynone");

            }
        }
    }
});
var isMobile = window.matchMedia("only screen and (max-width: 768px)");

if (isMobile.matches) {
    resizeSidebar("1");
    $("body")
        .getNiceScroll()
        .remove();
    $(".sidebar")
        .getNiceScroll()
        .remove();

    $(".computer.only").toggleClass("displaynone");
    $(".colhidden").toggleClass("displaynone");
} else {
    $("body").niceScroll({
        cursorcolor: "#3d3b3b",
        cursorwidth: 5,
        cursorborderradius: 0,
        cursorborder: 0,
        scrollspeed: 50,
        autohidemode: true,
        zindex: 9999999
    });
    $(".sidebar").niceScroll({
        cursorcolor: "#3d3b3b",
        cursorwidth: 2,
        cursorborderradius: 0,
        cursorborder: 0,
        scrollspeed: 50,
        autohidemode: true,
        zindex: 9999999
    });

    $(".displaynone .menu").niceScroll({
        cursorcolor: "#3d3b3b",
        cursorwidth: 5,
        cursorborderradius: 0,
        cursorborder: 0,
        scrollspeed: 50,
        autohidemode: true,
        zindex: 9999999
    });
}

function resizeSidebar(op) {

    if (op == "1") {

        $(".ui.sidebar.left").addClass("very thin icon");
        $(".navslide").addClass("marginlefting");
        $(".sidebar.left span").addClass("displaynone");
        $(".sidebar .accordion").addClass("displaynone");
        $(".ui.dropdown.item.displaynone").addClass("displayblock");
        $($(".logo img")[0]).addClass("displaynone");
        $($(".logo img")[1]).removeClass("displaynone");
        $(".hiddenCollapse").addClass("displaynone");


    } else {

        $(".ui.sidebar.left").removeClass("very thin icon");
        $(".navslide").removeClass("marginlefting");
        $(".sidebar.left span").removeClass("displaynone");
        $(".sidebar .accordion").removeClass("displaynone");
        $(".ui.dropdown.item.displaynone").removeClass("displayblock");
        $($(".logo img")[1]).addClass("displaynone");
        $($(".logo img")[0]).removeClass("displaynone");
        $(".hiddenCollapse").removeClass("displaynone");


    }

}



// using context
$('.ui.right.sidebar')
    .sidebar({
        context: $('#contextWrap .pusher'),
        transition: 'slide out',
        silent: true
    })
    .sidebar('attach events', '.rightsidebar');



function toggleFullScreen(elem) {
    // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
$(".ui.dropdown").dropdown({
    allowCategorySelection: true,
    transition: "fade up"
});
$('.ui.accordion').accordion({
    selector: {}
});

$(document).ready(function() {

    colorize();
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
    $(".ui.rating").rating(); //rating trigger
    $('.tabular .item').tab();
    $(".hamburger").on("click", function() {
        this
            .classList
            .toggle("is-active");
    });
    $('.ui.embed').embed();

});
//Sidebar And Navbar Coloring Function (This button on Footer)
function colorize() {
    var a;
    var b;
    var d;
    var z;
    var l;

    if (Cookies.get('sidebarColor') != undefined) {
        if (b == null) {
            b = $(".sidebar").attr("data-color");
        }
        $(".sidemenu").removeClass(b).addClass(Cookies.get('sidebarColor'));
        $(".sidebar").attr("data-color", Cookies.get('sidebarColor'));
    }

    if (Cookies.get('headerColor') != undefined) {
        if (z == null) {
            z = $(".navslide .menu").attr("data-color");
        }
        $(".navslide .menu").removeClass(z).addClass(Cookies.get('headerColor'));
        $(".navslide .menu").attr("data-color", Cookies.get('headerColor'));
    }



    $(".colorlist li a").on("click", function(b) {
        var c = $(this).attr("data-addClass");
        if (l == null) {
            l = $(".navslide .menu").attr("data-color");
        }
        console.log(l);
        $(".navslide .menu").removeClass(l).addClass(c);
        l = c;
        Cookies.set('headerColor', c);
    });
    $(".sidecolor li a").on("click", function(a) {
        var c = $(this).attr("data-addClass");
        // a.preventDefault();
        if (d == null) {
            d = $(".sidebar").attr("data-color");
        }
        $(".sidemenu").removeClass(d).addClass(c);
        $(".accordion").removeClass("inverted").addClass("inverted");
        Cookies.set('sidebarColor', c);
        d = c;
    });
    $(".colorize").popup({
        on: "click"
    });
}  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');  ga('create', 'UA-96662612-1', 'auto');  ga('send', 'pageview');
//Sidebar And Navbar Coloring Function (This button on Footer)