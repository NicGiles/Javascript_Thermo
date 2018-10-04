$(document).ready(function() {
var thermo = new Thermostat();
displayTemp();
displayPSM();

$("#increase-temperature").click(function() {
thermo.up(1);
displayTemp();

});

$("#decrease-temperature").click(function() {
thermo.down(1);
displayTemp();

});

function displayPSM() {
$('#displayPSM').text(thermo.displayPSM())
};

$("#power-save-on").click(function() {
  thermo.powerSaveOn();
  console.log(thermo.powerSave)
  displayTemp();
  displayPSM();
});

$("#power-save-off").click(function() {
  thermo.powerSaveOff();
  console.log(thermo.powerSave)
  displayPSM();
});



function displayTemp() {

$('#current-temperature').text(thermo.temperature);
$('#energy-usage').text(thermo.energyUsage())
  };
});
