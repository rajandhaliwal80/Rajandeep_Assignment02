/* about.js
Rajandeep Kaur Dhaliwal
300926123
Feb 15 2019*/

let express = require("express");
let router = express.Router();

/* GET about page. */
router.get("/about", function(req, res, next) {
  res.render("about", { title: "About Me" });
});

module.exports = router;
