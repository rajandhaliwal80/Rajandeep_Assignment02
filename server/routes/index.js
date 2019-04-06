/* index.js
Rajandeep Kaur Dhaliwal
300926123
Feb 15 2019*/

let express = require("express");
let router = express.Router();

let indexController = require('../controller/index');

router.get('/', indexController.displayHomePage);

module.exports = router;
