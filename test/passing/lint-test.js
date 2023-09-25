/**
 * @file
 * Lint test for jquery rules.
 */

(($, Drupal) => {
  const testClass = "lint-test";

  Drupal.behaviors.lintTest = {
    attach() {
      $("body").find("div").addClass(testClass);
    },
    detach() {
      const body = document.querySelector("body");

      body.querySelectorAll("div").forEach((div) => {
        div.classList.remove(testClass);
      });
    },
  };
})(jQuery, Drupal);
