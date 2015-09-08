var test = require('tape');
var shift = require('./');

test('shift', function (t) {

  var point = {
    "type": "Point",
    "coordinates": [-175, 70]
  };

  var linestring = {
    "type": "LineString",
    "coordinates": [[175,70], [-175,70]]
  };

  t.deepEqual(shift(point),
    {
      "type": "Point",
      "coordinates": [185, 70]
    });

  t.deepEqual(shift(linestring),
    {
      "type": "LineString",
      "coordinates": [[175,70], [185,70]]
    });

  t.deepEqual(point, point);
  t.deepEqual(linestring, linestring);

  t.end();
});