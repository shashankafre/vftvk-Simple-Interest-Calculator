function updateRate() {
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var year = new Date().getFullYear() + parseInt(years);
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
function compuetinterest() {
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var year = new Date().getFullYear() + parseInt(years);
  var principal = document.getElementById("principal").value;
  var amount = (principal * years * rate) / 100 + parseInt(principal);
  document.getElementById("result").innerHTML =
    "If you deposit " +
    principal +
    ",<br>at an interest rate of " +
    rate +
    "%<br>You will receive an amount of " +
    amount +
    ",<br>in the year " +
    year +
    "<br>";
}