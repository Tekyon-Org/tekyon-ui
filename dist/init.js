/**
 * Simple To-Do List example App
*/

import {Core} from './../Core';

// Create the app thread
var AppThread = new Worker('./app.worker.js', { type: 'module' });

var ui = new Core({

    app: AppThread

});

window.ui = ui;