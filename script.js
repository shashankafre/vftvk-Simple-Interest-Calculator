function updateRate() {
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var year = new Date().getFullYear() + parseInt(years);
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}
function validatecompute() {
  if (
    parseInt(document.getElementById("principal").value) <= 0 ||
    document.getElementById("principal").value === ""
  ) {
    alert("Please Enter Non-Zero Positive Values");
    document.getElementById("principal").focus();
  } else {
    compuetinterest();
  }
}
function compuetinterest() {
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var year = new Date().getFullYear() + parseInt(years);
  var principal = document.getElementById("principal").value;
  var amount = (principal * years * rate) / 100;
  document.getElementById("result").innerHTML =
    "If you deposit <span style='background-color:yellow'>" +
    principal +
    "</span>,<br>at an interest rate of <span style='background-color:yellow'>" +
    rate +
    "%</span><br>You will receive an amount of <span style='background-color:yellow'>" +
    amount +
    "</span>,<br>in the year <span style='background-color:yellow'>" +
    year +
    "</span><br>";
}
