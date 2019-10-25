var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var check = require('point-in-geopolygon');
var map = require("../../../hw1/polygons.json");
var fs = require('fs');
// var obj;
// fs.readFileSync('polygons.json', 'utf8', function (err, data) {
//   if (err) throw err;
//   obj = JSON.parse(data);
//   console.log(obj);
//
// });
// var obj = JSON.parse(fs.readFileSync('polygons.json', 'utf8'));
/* GET users listing. */
router.get('/testpoint', function(req, res, next) {
  var lat = req.query.lat;
  var long = req.query.long;
  var locations = map.features;
  let ans = [];
  for (let i = 0; i< locations.length; i++)  {
    if (check.polygon(locations[i].geometry.coordinates, [lat, long])) {
      ans.push(locations[i].properties.name)
    }
  }
  // check.feature(map.features, [lat, long])
  console.log(ans);
  res.json(ans);
  // res.send('your point is in: ' + ans);
});
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
router.put('/addpolygon', function(req, res, next) {
  console.log(req.body);
  map.features.push(req.body);
  var json = JSON.stringify(map);
  fs.writeFile('polygons.json', json, 'utf8', callback);
  // map.features.push()
  res.send('new polygon added');
});
function callback () {}
module.exports = router;
