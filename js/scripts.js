$(document).ready(function() {
  $(".green").click(function() {
    $("body").addClass("green-background");
    $(this).hide();
    $(".lightgreen").show();
  });

  $(".lightgreen").click(function() {
    $("body").addClass("lightgreen-background");
    $(this).hide();
    $(".blue").show();
  });

  $(".blue").click(function() {
    $("body").addClass("blue-background");
    $(this).hide();
    $(".reset").show();
  });


  $(".reset").click(function() {
    $("body").removeClass();
    $(this).hide();
    $(".green").show();
  });

});
