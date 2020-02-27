
const { getProperty, getEventProperty } = require('../dist/index.c');


test('getProperty width default host correctly', () => {
  const style = {
    webkitProp1: 1,
    msProp2: 1,
    mozProp3: 1,
    oProp4: 1
  };
  Object.defineProperties(HTMLElement.prototype, {
    style: {
      get() {
        return style;
      }
    }
  })
  expect(getProperty('transform')).toBe('transform');
  expect(getProperty('prop1')).toBe('webkitProp1');
  expect(getProperty('prop2')).toBe('msProp2');
  expect(getProperty('prop3')).toBe('mozProp3');
  expect(getProperty('prop4')).toBe('oProp4');
  expect(getProperty('otherprop')).toBe('otherprop');
})

test('getProperty width passed host correctly', () => {
  expect(getProperty('requestAnimationFrame', window)).toBe('requestAnimationFrame');
  delete window.requestAnimationFrame;
  expect('requestAnimationFrame' in window).toBe(false);
  window.webkitRequestAnimationFrame = undefined;
  expect(getProperty('requestAnimationFrame', window)).toBe('webkitRequestAnimationFrame');
})

test('getEventProperty width default host correctly', () => {
  expect(getEventProperty('animationend')).toBe('animationend');
  delete document.body.onanimationend;
  expect('onanimationend' in document.body).toBe(false);
  document.body.onwebkitanimationend = undefined;
  expect(getEventProperty('animationend')).toBe('webkitanimationend');
})

test('getEventProperty width passed host correctly', () => {
  const div = document.createElement('div');
  expect(getEventProperty('animationend', div)).toBe('animationend');
  delete div.onanimationend;
  div.onwebkitanimationend = undefined;
  expect(getEventProperty('animationend', div)).toBe('webkitanimationend');
})
