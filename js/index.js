$(document).ready(function(){
  // $(".title").css("display", "inline");
  $(".title").fadeIn(1500);
  $("#button1").click(function(){
   var query = $("#input").val();
   $("#test").html(query);
  });
  $("#button2").click(function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
});