$(document).ready(function () {

  $(".text").hide();
  $(".weDo-cont").click(function () {
    $(this).children(".text").slideToggle(500);
    $(this).children(".hide-img").toggle(500);
  });

  $(".port_desc").hide();
  $(".port_cont").hover(function () {
    $(this).children(".port_desc").fadeToggle("fast", "linear");
  });



});