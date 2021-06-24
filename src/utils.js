"use strict";

const toString = Object.prototype.toString;
/**
 *
 *
 * @param {object} element The Object to test
 * @returns  {boolean} True if value is The Array, otherwise false
 */
function isObject(element) {
    return toString.call(element) === "[object Object]";
}

function EmptyeObject(element) {
    return Object.keys(element).length === 0;
}

/**
 *
 * @param {object} element The Object to test
 * @returns {boolean} True if value is The Plain Object, otherwise false
 */
function isPlainObject(element) {
    if (typeof element !== "object") return false;

    const prototype = Object.getPrototypeOf(element);
    return prototype === null || prototype === Object.prototype;
}

/**
 *
 *
 * @param {object} element The Object to test
 * @returns {boolean} True if value is The Object, otherwiss false
 */

function isArray(element) {
    return toString.call(element) === "[object Array]";
}

/**
 * 
 * 
 * @param {object} obj The Object to check key 
 * @param {string} key The String is  key name 
 * @returns 
 */
function hasKey(obj, key) {
    return Object.hasOwnProperty.call(obj, key);
}

/**
 *
 * @param {number|string|boolean|array|object} obj The object to iterator
 * @param {function} done The callback to invoke for each item
 * @returns
 */
function forEach(obj, done) {
    if (obj === null || typeof obj === "undefined") return;

    if (typeof obj !== "object") obj = [obj];

    if (isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; ++i) done.call(null, obj[i], i, obj);
    } else {
        for (let key in obj) done.call(null, obj[key], key, obj);
    }
}
/**
 *  this copy the object
 *
 * @param {object} target The Object to target object
 * @param {object} source The Object to copy object
 * @returns {object} copy object
 */
function extend(target, source) {
    if (source) {
        for (let key in source) {
            const val = source[key];
            if (typeof val !== "undefined") target[key] = val;
        }
    }
    return target;
}
