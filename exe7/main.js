$(document).ready(function () {
    $("#btn").click(function (e) { 
        e.preventDefault();
        let width = $(".prgsbar").width();
        // console.log(width)
        $(".prgsbar").width(width + 10);
    });
});