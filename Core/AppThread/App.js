/**
 * Tekyon UI
 * App Thread Interface
*/

import {Event} from '../Event';

export var AppThread = {

    // App thread
    worker: null,

    // Whether the App thread is the Main thread
    isMainThread: !(typeof document==="undefined")

};

export var App = {

    // Initializes the App thread
    init: (worker) => {
        AppThread.worker = worker;

        // Start listening for proxied events
        Event.listen(worker);
    }

}

// Initialize the thread on which this file is imported, as the App Thread
App.init(self);