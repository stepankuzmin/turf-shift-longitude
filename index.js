var clone = require('clone');
var coordEach = require('turf-meta').coordEach;

/**
 * Reads every point/vertex in every component of every feature in a
 * geometry, and if the longitude coordinate is < 0, adds 360 to it. The
 * result would be a 0-360 version of the data to be plotted in a 180 centric map.
 *
 * @module turf/shift-longitude
 * @category helper
 * @param {Object} layer any GeoJSON object
 * @returns {Object} layer shifted GeoJSON object
 * @throws {Error} if no coordinates are passed
 * @example
 * var shift = require('turf-shift-longitude');
 * var point = { type: 'Point', coordinates: [-175, 70] };
 * var shifted = shift(point);
 * //=shifted
 */
module.exports = function(geojson) {
  shifted_geojson = clone(geojson);
  coordEach(shifted_geojson, function(coordinates) {
    if (coordinates[0] < 0) coordinates[0] += 360;
  });
  return shifted_geojson;
};