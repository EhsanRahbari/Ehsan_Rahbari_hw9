$(document).ready(function () {
  $("#but1").click(function () {
    let parentText = $("#main")
      .parent()
      .contents()
      .not($("#main").parent().children())
      .text();

    $("#main").prepend(parentText);
  });
  $("#but2").click(function () {
    let childText = $("#main").children().text();
    $("#main").append(childText);
  });
});
