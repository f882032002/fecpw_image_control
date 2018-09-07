var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'F.E.C.P.W.', 
    title_maps: 'Full Enterprise Cloud Plantform Web',
    title_area: 'Area Group',
    title_device: 'Device List',
    title_warning: 'Log',
    title_function_area: 'Control & Information'
  });
});

module.exports = router;
