/**
 * @fileoverview Object for managing multiple caches of different types.
 * @author Kai Cataldo
 */

"use strict";

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Cache
 *
 * A generic cache object that manages multiple caches of different types.
 * The cache will lazily generate a new cache of the specified type when
 * there is new data to set.
 */
module.exports = class Cache {

    /**
     * Sets a value in the cache of the given type.
     * @param {string} type A string representing the type of cache to generate or set to.
     * @param {Object} key The key to set.
     * @param {*} val val The value to set.
     * @returns {Object} The cache WeakMap object.
     * @public
     */
    set(type, key, val) {
        if (!this[type]) {
            this[type] = new WeakMap();
        }

        return this[type].set(key, val);
    }

    /**
     * Gets a value in the cache of the given type.
     * @param {string} type A string representing the type of cache to get from.
     * @param {Object} key The key to get.
     * @returns {*|void} Either the set value or undefined.
     * @public
     */
    get(type, key) {
        if (!this[type]) {
            return void 0;
        }

        return this[type].get(key);
    }

    /**
     * Checks to see if a key is set in the cache of the given type.
     * @param {string} type A string representing the type of cache to check for the given key.
     * @param {Object} key The key to get.
     * @returns {boolean} Whether or not the cache has the given key.
     * @public
     */
    has(type, key) {
        if (!this[type]) {
            return false;
        }

        return this[type].has(key);
    }
};
