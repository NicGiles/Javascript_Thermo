$(document).ready(function() {
var thermo = new Thermostat();
displayTemp();
displayPSM();
$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp+ '\xB0C');
})


$("#increase-temperature").click(function() {
thermo.up(1);
displayTemp();

});

$("#decrease-temperature").click(function() {
thermo.down(1);
displayTemp();

});

$("#reset").click(function() {
thermo.reset();
displayTemp();

});

$('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp+'\xB0C')
  });
})

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

$('#the-temperature').text(thermo.temperature+'\xB0C');
$('#energy-usage').text(thermo.energyUsage())
  };
});
