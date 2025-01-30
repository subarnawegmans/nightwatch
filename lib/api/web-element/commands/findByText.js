const {By} = require('selenium-webdriver');

/**
 * Search for an element on the page that contains a specified text.
 * Element can be searched by using another element as the starting point.
 * By default, an exact comparison is used.
 * If you need the passed in text is as a substring, provide the `{ exact: false }` as the second parameter.
 *
 * @example
 * export default {
 *   demoTest(browser: NightwatchAPI): void {
 *     // Search by the substring matching.
 *     const inputs = browser.element.findByText('group of people', { exact: false });
 *
 *     // Search for the exact occurrence.
 *     const images = browser.element.findByText('The nostalgic office');
 *   }
 * }
 *
 * @since 3.0.0
 * @method findByText
 * @memberof ScopedWebElement
 * @instance
 * @syntax browser.element.findByText(text, [options])
 * @param {string} text
 * @param {{exact: boolean}} [options]
 * @returns {ScopedWebElement}
 */
module.exports.command = function(text, {exact = true, ...options} = {}) {
  const selector = exact
    ? By.xpath(`.//*[text()="${text}"]`)
    : By.xpath(`.//*[contains(text(),"${text}")]`);

  return this.find({
    ...options,
    selector
  });
};
