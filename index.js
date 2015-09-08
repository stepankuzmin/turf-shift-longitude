var clone = require('clone');
var coordEach = require('turf-meta').coordEach;

module.exports = function(geojson) {
  shifted_geojson = clone(geojson);
  coordEach(shifted_geojson, function(coordinates) {
    if (coordinates[0] < 0) coordinates[0] += 360;
  });
  return shifted_geojson;
};