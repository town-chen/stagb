//modal page modals trigger settings
'use strict'
$(".ui.modal.standard").modal("attach events", ".modalone", "show");
$(".ui.modal.basic").modal("attach events", ".modaltwo", "show");
$(".ui.modal.fullscreen").modal("attach events", ".modalthree", "show");
$(".ui.modal.small").modal("attach events", ".modalfour", "show");
$(".ui.modal.large").modal("attach events", ".modalfive", "show");
$(".ui.modal.long").modal("attach events", ".modalsix", "show");
$(".modaleffect").on("click", function () {
    var a = $(this).attr("data-value");
    $(".ui.modal.standard").modal("setting", "transition", a).modal("show");
});
$(".modalinverted").on("click", function () {
    $(".ui.modal.inverted").modal({
        inverted: true,
        blurring: false
    }).modal("show");
});
$(".modalblur").on("click", function () {
    $(".ui.modal.standard").modal({
        blurring: true,
        inverted: false
    }).modal("show");
});
$(".modalactionone").on("click", function () {
    $(".ui.actionmodal").modal({
        closable: false,
        onDeny: function () {
            window.alert("OOooopps! You must read this..");
            return false;
        },
        onApprove: function () {
            window.alert("Yess He is a Best Footballer in Holland now!");
        }
    }).modal("show");
});