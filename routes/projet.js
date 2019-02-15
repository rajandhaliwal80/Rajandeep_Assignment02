let express = require('express');
let router = express.Router();

router.get('/project', function(req, res, next) {
    res.render('project', { title: 'Project' });
  });

  module.exports = router;