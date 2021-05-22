$(document).ready(function () {
 $("#slideup").click(function(){
   $("div").slideUp();
 })
 $("#slidedown").click(function(){
  $("div").slideDown();
})
$("#slidetoggle").click(function(){
  $("div").slideToggle();
})
});
