$(document).ready(function () {
    var x = 0;
    var s = "";

    console.log("Hello Pluralsight");

    //***Före Jquery ***//
    //var theForm = document.getElementById("theForm");
    //theForm.hidden = true;

    //***Efter Jquery***//
    var theForm = $("#theForm");
    theForm.hide();

    //***Före Jquery ***//
    //var button = document.getElementById("buyButton");
    //button.addEventListener("click", function () {
    //    console.log("Buying Item");
    //});

    //***Efter Jquery***//
    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying Item");
    });

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You clicked one of the items: " + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(1000);
    });

});
 

