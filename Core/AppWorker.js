/**
 * Tekyon UI
 * App Worker - Performs arbitrary operations unrelated to the DOM on demand
*/

import AWorker from './App.worker.js';

export class AppWorkerClass {

    /**
     * @constructor
    */
    constructor() {

        this.instance = null;

    }

    /**
     * Starts the web worker
    */
    launch() {
        var worker = new AWorker();
        this.instance = worker;
    }

    /**
     * Runs a function in the worker thread
    */
    run(func, array) {
        return new Promise((resolve, reject) => {
            
            var funcString = "(" + func.toString() + ")()";
        });
    }

}

export var AppWorker = new AppWorkerClass();