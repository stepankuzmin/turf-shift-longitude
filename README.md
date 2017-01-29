# turf-shift-longitude

[![Greenkeeper badge](https://badges.greenkeeper.io/stepankuzmin/turf-shift-longitude.svg)](https://greenkeeper.io/)

[![build status](https://secure.travis-ci.org/stepankuzmin/turf-shift-longitude.png)](http://travis-ci.org/stepankuzmin/turf-shift-longitude)




### `turf.shift-longitude(layer)`

Reads every point/vertex in every component of every feature in a
geometry, and if the longitude coordinate is < 0, adds 360 to it. The
result would be a 0-360 version of the data to be plotted in a 180 centric map.

### Parameters

| parameter | type   | description        |
| --------- | ------ | ------------------ |
| `layer`   | Object | any GeoJSON object |


### Example

```js
var shift = require('turf-shift-longitude');
var point = { type: 'Point', coordinates: [-175, 70] };
var shifted = shift(point);
//=shifted
```


**Returns** `Object`, layer shifted GeoJSON object

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-shift-longitude
```

## Tests

```sh
$ npm test
```


