$(document).ready(function() {
  $("button#day").hover(function() {
    $("body").removeClass();
    $("body").addClass("day");
  });

  $("button#night").hover(function() {
    $("body").removeClass();
    $("body").addClass("night");
  });
});
