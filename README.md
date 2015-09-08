# turf-shift-longitude

[![Build Status](https://travis-ci.org/stepankuzmin/turf-shift-longitude.svg?branch=master)](https://travis-ci.org/stepankuzmin/turf-shift-longitude)
[![Dependency Status](https://david-dm.org/stepankuzmin/turf-shift-longitude.svg)](https://david-dm.org/stepankuzmin/turf-shift-longitude)
[![devDependency Status](https://david-dm.org/stepankuzmin/turf-shift-longitude/dev-status.svg)](https://david-dm.org/stepankuzmin/turf-shift-longitude#info=devDependencies)

**turf-shift-longitude** -- reads every point/vertex in every component of every feature in a geometry, and if the longitude coordinate is <0, adds 360 to it. The result would be a 0-360 version of the data to be plotted in a 180 centric map.

## shift(layer)

* `layer` (`Object`): any GeoJSON object

```js
var point = { type: 'Point', coordinates: [-175, 70] };
shift(point)
// { type: 'Point', coordinates: [185, 70] };
```