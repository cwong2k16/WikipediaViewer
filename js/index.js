$(document).ready(function(){
  var limit = 10;
  // $(".title").css("display", "inline");
  $(".title").fadeIn(1500);
  $("#button1").click(function(){
   var searchTerm = $("#input").val(); // this is the thing the user is searching for
   var query = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&limit=" + limit + "&format=json";
      
      $.getJSON(query, function(json){
          $("#test").html("");
          for(var i = 0; i < limit; i++){
          $("#test").append("<h1>" + json[1][i] + "</h1> " + json[2][i] + "<br/> <a target = '_blank' href = '" + json[3][i] + "'>Read More</a>");
          }
      });
  });
  $("#button2").click(function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
});