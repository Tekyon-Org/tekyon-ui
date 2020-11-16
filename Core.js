/**
 * TekyonUI - An open source high-performance UI library built on vanilla ES6 JavaScript.
 * @version 1.0.0
 * @dev Tekyon Organization
 * Licensed Under the Apache License, Version 2.0
*/

import Navigo from 'navigo';

/**
 * @class Core
 * Core functions and (possibly) initialization processes
*/
export class Core {

    /**
     * @constructor
    */
    constructor() {

    }

}

/**
 * @class Router
 * Handles URL hash changes and routing
*/
export class Router {

    router = null;

    /**
     * @constructor
    */
    constructor(config) {
        var root = typeof config.root=="undefined" ? null : config.root;
        var useHash = (typeof config.hash).toLowerCase()=="string" ? true : false;
        var hash = config.hash;
        var Router = new Navigo(root, useHash, hash);

        router = Router;
    }

}