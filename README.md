# vendor-property
get browser vendor specific property name. currently only 'webkit' 'ms' 'moz' 'o' are in the list.

# useage

```js
import { getProperty, getEventProperty } from '@joyfulljs/vendor-property';

// use default property owner: document.body.style.
console.log(getProperty('transform'));
// output in lastest browser: transform
// output in old ie: msTransform

// use `window` as property owner
console.log(getProperty('requestAnimationFrame', window));
// output in lastest browser: requestAnimationFrame
// output in old chrome: webkitRequestAnimationFrame

console.log(getEventProperty('animationend'));
// output in lastest browser: animationend
// output in old chrome: webkitanimationend
```

# note

1. `getEventProperty` return event name that without `on` prefix, can be used directly in `addEventListener`.  
2. It will return what passed in when the property is not in the owner.

# license

MIT