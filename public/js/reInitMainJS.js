function reInitMain() {
  var jq = document.createElement("script");
  jq.type = "text/javascript";
  jq.src = "/js/main.js";
  $("head")[0].append(jq);
}
