var budget = 100;
var product = 60;

if (budget >= product) {
  console.log("U heeft genoeg geld!");
  document.body.style.color = "green";  // Maak de tekstkleur groen
} else {
  console.log("Helaas, te weinig geld");
  document.body.style.color = "red";  // Maak de tekstkleur rood
}