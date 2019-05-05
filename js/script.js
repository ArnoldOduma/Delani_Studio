$(document).ready(function(){

  $(".text").hide();
  $(".weDo-cont").click(function() {
    $(this).children(".text").slideToggle(500);
    $(this).children(".hide-img").toggle(500);
  });



});