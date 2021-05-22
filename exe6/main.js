$(document).ready(function () {
    $("#pages").hover(function(){
        $(".pageItems").fadeIn();
    } , function(){
        $(".pageItems").fadeOut(); 
    });
    $("#link").hover(function(){
        $(".linkItems").fadeIn();
    } , function(){
        $(".linkItems").fadeOut(); 
    });
});