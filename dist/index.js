/**
 * vendor prefixes that being taken into consideration.
 */
export var vendors = ['webkit', 'ms', 'moz', 'o'];
/**
 * get vendor property name that contains uppercase letter.
 * e.g. webkitTransform
 * @param prop property name. for example: transform
 * @param host optional. property owner. default to `document.body.style`.
 */
export function getProperty(prop, host) {
    var targetHost = host || document.body.style;
    if (!(prop in targetHost)) {
        var char1 = prop.charAt(0).toUpperCase();
        var charLeft = prop.substr(1);
        for (var i = 0; i < vendors.length; i++) {
            var vendorProp = vendors[i] + char1 + charLeft;
            if (vendorProp in targetHost) {
                return vendorProp;
            }
        }
    }
    return prop;
}
/**
 * get vendor event property name omitting `on` prefix.
 * @param prop property name. for example: onwebkitanimationend.
 * @param host optional. property owner. default to `document.body`.
 */
export function getEventProperty(prop, host) {
    var targetHost = host || document.body;
    if (!(('on' + prop) in targetHost)) {
        for (var i = 0; i < vendors.length; i++) {
            var vendorProp = vendors[i] + prop;
            if (('on' + vendorProp) in targetHost) {
                return vendorProp;
            }
        }
    }
    return prop;
}
