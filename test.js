var test = require('tape');
var shift = require('./');

test('shift', function (t) {

  var point = {
    "type": "Point",
    "coordinates": [-175, 70]
  };

  var multiPoint = {
    "type": "MultiPoint",
    "coordinates": [[-175, 70], [-165, 70]]
  };

  var linestring = {
    "type": "LineString",
    "coordinates": [[175,70], [-175,70]]
  };

  var multiLinestring = {
    "type": "MultiLineString",
    "coordinates": [[[175,70], [-175,70]], [[165,70], [-165,70]]]
  };

  var polygon = {
    "type": "Polygon",
    "coordinates":  [[[175,70],[175,72],[-175,72],[-175,70],[175,70]]]
  };

  var multiPolygon = {
    "type": "MultiPolygon",
    "coordinates": [[[[175,70],[175,72],[-175,72],[-175,70],[175,70]]],[[[165,70],[165,72],[-165,72],[-165,70],[165,70]]]]
  };

  var geometryCollection = {
    "type": "GeometryCollection",
    "geometries": [point, linestring, polygon]
  };

  var pointFeature = {
    "type": "Feature",
    "properties": {a: 1},
    "geometry": point
  }

  var linestringFeature = {
    "type": "Feature",
    "properties": {b: 2},
    "geometry": linestring
  }

  var polygonFeature = {
    "type": "Feature",
    "properties": {c: 3},
    "geometry": polygon
  }

  var featureCollection = {
    "type": "FeatureCollection",
    "features": [pointFeature, linestringFeature, polygonFeature]
  }

  t.deepEqual(shift(point),
    {
      "type": "Point",
      "coordinates": [185, 70]
    }, 'Point shift');

  t.deepEqual(shift(linestring),
    {
      "type": "LineString",
      "coordinates": [[175,70], [185,70]]
    }, 'LineString shift');

  t.deepEqual(shift(polygon),
    {
      "type": "Polygon",
      "coordinates": [[[175,70],[175,72],[185,72],[185,70],[175,70]]]
    }, 'Polygon shift');

  t.deepEqual(shift(multiPoint),
    {
      "type": "MultiPoint",
      "coordinates": [[185, 70], [195, 70]]
    }, 'MultiPoint shift');

  t.deepEqual(shift(multiLinestring),
    {
      "type": "MultiLineString",
      "coordinates": [[[175,70], [185,70]], [[165,70], [195,70]]]
    }, 'MultiLineString shift');

  t.deepEqual(shift(multiPolygon),
    {
      "type": "MultiPolygon",
      "coordinates": [[[[175,70],[175,72],[185,72],[185,70],[175,70]]],[[[165,70],[165,72],[195,72],[195,70],[165,70]]]]
    }, 'MultiPolygon shift');

  t.deepEqual(shift(geometryCollection),
    {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "coordinates": [185, 70]
        },
        {
          "type": "LineString",
          "coordinates": [[175,70], [185,70]]
        },
        {
          "type": "Polygon",
          "coordinates": [[[175,70],[175,72],[185,72],[185,70],[175,70]]]
        },
      ]
    }, 'GeometryCollection shift');

  t.deepEqual(shift(pointFeature),
    {
      "type": "Feature",
      "properties": {a: 1},
      "geometry": {
        "type": "Point",
        "coordinates": [185, 70]
      }
    }, 'Point feature shift');

  t.deepEqual(shift(linestringFeature),
    {
      "type": "Feature",
      "properties": {b: 2},
      "geometry": {
        "type": "LineString",
        "coordinates": [[175,70], [185,70]]
      }
    }, 'LineString feature shift');

  t.deepEqual(shift(polygonFeature),
    {
      "type": "Feature",
      "properties": {c: 3},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[175,70],[175,72],[185,72],[185,70],[175,70]]]
      }
    }, 'Polygon feature shift');

  t.deepEqual(shift(featureCollection),
    {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {a: 1},
          "geometry": {
            "type": "Point",
            "coordinates": [185, 70]
          }
        },
        {
          "type": "Feature",
          "properties": {b: 2},
          "geometry": {
            "type": "LineString",
            "coordinates": [[175,70], [185,70]]
          }
        },
        {
          "type": "Feature",
          "properties": {c: 3},
          "geometry": {
            "type": "Polygon",
            "coordinates": [[[175,70],[175,72],[185,72],[185,70],[175,70]]]
          }
        }
      ]
    }, 'FeatureCollection shift');

  t.deepEqual(point, point, 'Point remained unchanged');
  t.deepEqual(linestring, linestring, 'LineString remained unchanged');
  t.deepEqual(polygon, polygon, 'Polygon remained unchanged');
  t.deepEqual(multiPoint, multiPoint, 'MultiPoint remained unchanged');
  t.deepEqual(multiLinestring, multiLinestring, 'MultiLineString remained unchanged');
  t.deepEqual(multiPolygon, multiPolygon, 'MultiPolygon remained unchanged');
  t.deepEqual(geometryCollection, geometryCollection, 'GeometryCollection remained unchanged');
  t.deepEqual(pointFeature, pointFeature, 'Point feature remained unchanged');
  t.deepEqual(linestringFeature, linestringFeature, 'LineString feature remained unchanged');
  t.deepEqual(polygonFeature, polygonFeature, 'Polygon feature remained unchanged');
  t.deepEqual(featureCollection, featureCollection, 'FeatureCollection remained unchanged');

  t.end();
});