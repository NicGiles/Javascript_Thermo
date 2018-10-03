var Thermostat = function() {

  this.temperature = 20;

};

Thermostat.prototype.up = function(number) {
  this.temperature += number;
};

Thermostat.prototype.down = function(number) {
  if (this.temperature - number < 10 ) {
    this.temperature = 10;
  } else {
    this.temperature -= number;
  }
};
