/* services.js
Rajandeep Kaur Dhaliwal
300926123
Feb 15 2019*/

let express = require("express");
let router = express.Router();

/* GET services page. */
router.get("/services", function(req, res, next) {
  res.render("services", { title: "Services" });
});

module.exports = router;
