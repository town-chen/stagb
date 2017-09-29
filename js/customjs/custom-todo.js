//todo settings in todo page
'use strict'
$("button#create-task").on("click", function () {
    var a = $("input[name=task-insert]").val();
    if (0 == a.length) Lobibox.notify("error", {
        title: "Error",
        msg: "Please Enter a Task"
    }); else {
        if (".nothing-message") $(".nothing-message").hide("slide", {
            direction: "left"
        }, 300);
        var b = "<li>" + "<p>" + a + "</p>" + "</li>";
        $("#task-list").append(b);
        $("input").val("");
        $("#controls").fadeIn();
        $(".task-headline").fadeIn();
    }
});
$(document).on("click", "li", function () {
    $(this).toggleClass("complete");
});
$(document).on("dblclick", "li", function () {
    $(this).remove();
});
$("button#clear-all-tasks").on("click", function () {
    $("#task-list li").remove();
    $(".task-headline").fadeOut();
    $("#controls").fadeOut();
    $(".nothing-message").show("fast");
});