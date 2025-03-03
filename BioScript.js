function showContent() {
  debugger;
  $("#bit").hide();
  $("#bit1").show();
  $("#extra").attr("style", "display: show !important");
}

function hideContent() {
  $("#bit").show();
  $("#bit1").hide();
  $("#extra").attr("style", "display: none !important");
}
