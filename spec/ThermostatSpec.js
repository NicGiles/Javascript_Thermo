describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase temperature', function() {
    thermostat.up(4)
    expect(thermostat.temperature).toEqual(24);
  });

  it('can decrease temperature', function() {
    thermostat.down(8)
    expect(thermostat.temperature).toEqual(12);
  });

  it('cannot go below 10', function() {
    thermostat.down(17)
    expect(thermostat.temperature).toEqual(10);
  });

});
