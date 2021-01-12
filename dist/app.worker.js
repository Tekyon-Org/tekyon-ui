/**
 * App Thread
 * The entire app runs here
*/

import {App, DOM} from './TekyonUI';
import {AppHeader, Component} from './TekyonUI';

var header = new AppHeader('header-main');

header.setTitle("App").style({
    backgroundColor: "#01c34b"
}, false).apply();

header.on("click", (event) => {
    header.setTitle("Clicked at " + event.clientX).apply();
}, ["clientX"]);

self.header = header;

DOM.on('click', 'document', (event) => {
    DOM.mutate('text', ['innerHTML'], event.clientX).apply();
}, ['clientX']);