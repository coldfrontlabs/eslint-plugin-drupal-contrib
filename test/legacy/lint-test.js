/**
 * @file
 * Lint test for jquery rules.
 */

(function ($, Drupal) {
  'use strict';
  var testClass = 'lint-test';

  Drupal.behaviors.lintTest = {
    attach: function () {
      $('body').addClass(testClass);
    },
    detach: function () {
      var body = document.querySelector('body');

      body.querySelectorAll('div').forEach(function (div) {
        div.classList.remove(testClass);
      });
    }
  };
})(jQuery, Drupal);
