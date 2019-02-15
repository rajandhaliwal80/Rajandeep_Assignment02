/* app.js
Rajandeep Kaur Dhaliwal
300926123
Feb 15 2019*/

//IFE -- Immediately Invoked Function Expression

(function() {
  function Start() {
    console.log(
      `%c App Started...`,
      "font-size: 20px; color: blue; font-weight: bold"
    );
  }

  window.addEventListener("load", Start);
})();
