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

  $("#submission").submit(function(event){
    var data_1 = $("input:first").val();
    var data_2 = $("input#mail").val();
    if(data_1 && data_2 != ""  ){
      $(".message").text("Thank you " + data_1 + " Your message has been received");
      $(".message").removeClass("error");
      $(".message").addClass("success");
    }else{
      $(".message").text("Error!!! Please fill in all the details correctly");
      $(".message").addClass("error");
    }
    event.preventDefault();
  });

});