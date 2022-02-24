const buildDOM = require('./index');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('The Page', () => {
  beforeEach(() => {
    const dom = new JSDOM(
      '<div id="root"></div>',
    );
    global.document = dom.window.document;
    global.window = dom.window;
  });

    test('search-element exists', () => {
        buildDOM.buildDOM(dom);

        expect(document.querySelector('.search-container')).toBeDefined();
    })
});