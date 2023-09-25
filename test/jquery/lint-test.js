/**
 * @file
 * Lint test for jquery rules.
 */

(function ($, Drupal) {
  var testClass = "lint-test";

  Drupal.behaviors.lintTest = {
    attach: function () {
      $("body").find("div").addClass(testClass);
    },
    detach: function () {
      var body = document.querySelector("body");

      body.querySelectorAll("div").forEach(function (div) {
        div.classList.remove(testClass);
      });
    },
  };
})(jQuery, Drupal);
