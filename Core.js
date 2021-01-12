/**
 * TekyonUI - An open source high-performance UI library built on vanilla ES6 JavaScript.
 * @version 1.0.0
 * @dev Tekyon Organization
 * Licensed Under the Apache License, Version 2.0
*/

import Navigo from 'navigo';
import {Client} from './Core/Client/Client';

export {App} from './Core/AppThread/App';
export {DOM} from './Core/DOM';
export * from './Core/Component';
export * from './Components';

/**
 * @class Core
 * Core functions and (possibly) initialization processes
*/
export class Core {

    /**
     * Thread on which the App runs
    */
    appThread = null;

    /**
     * @constructor
    */
    constructor(options) {

        this.appThread = options.app ? options.app : self;

        // Start listening to the App worker
        Client.listen(this.appThread);

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