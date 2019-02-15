let express = require('express');
let router = express.Router();

router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services' });
  });

  module.exports = router;