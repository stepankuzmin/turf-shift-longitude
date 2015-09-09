# turf-shift-longitude

[![build status](https://secure.travis-ci.org/stepankuzmin/turf-shift-longitude.png)](http://travis-ci.org/stepankuzmin/turf-shift-longitude)




### `turf.shift-longitude(layer)`

Reads every point/vertex in every component of every feature in a
geometry, and if the longitude coordinate is 

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


