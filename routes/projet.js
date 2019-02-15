/* project.js
Rajandeep Kaur Dhaliwal
300926123
Feb 15 2019*/

let express = require("express");
let router = express.Router();

/* GET project page. */
router.get("/products", function(req, res, next) {
  res.render("project", { title: "Project" });
});

module.exports = router;
