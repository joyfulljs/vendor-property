/**
 * vendor prefixes that being taken into consideration.
 */
export declare const vendors: string[];
/**
 * get vendor property name that contains uppercase letter.
 * e.g. webkitTransform
 * @param prop property name. for example: transform
 * @param host optional. property owner. default to `document.body.style`.
 */
export declare function getProperty(prop: string, host?: HTMLElement | Window | Navigator): string;
/**
 * get vendor event property name omitting `on` prefix.
 * @param prop property name. for example: onwebkitanimationend.
 * @param host optional. property owner. default to `document.body`.
 */
export declare function getEventProperty(prop: string, host?: HTMLElement | Window): string;
