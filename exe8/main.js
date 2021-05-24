$(document).ready(function () {
  $("div").click(function (e) {
    e.preventDefault();
    let rotated = false;
    let opened = true;
    $("div")
      .not(this)
      .each(function () {
        $(this).find("p").slideUp();
      });
    $(this).find("p").slideDown();

    if (!rotated) {
      $(this).find("i").css({
        transform: "rotate(90deg)",
      });
    } else {
      $(this).find("i").css({
        transform: "rotate(0deg)",
      });
    }
    rotated = !rotated;
  });
});
