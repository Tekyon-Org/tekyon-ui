/**
 * Tekyon UI
 * Interface to interact with the DOM living on the main thread
*/

import {Event} from './Event';
import {Component} from './Component';

class DOMInterface {

    /**
     * Creates a proxied event listener for the event on the main thread
    */
    on(event, ctx, handler, props) {
        Event.addHandler({
            context: ctx,
            event: event,
            props: typeof props=="undefined" ? [] : props,
            handler: handler
        });
    }

    /**
     * Returns a Component that matches the given attribute query from the live DOM
    */
    querySelector(query, ctx) {
        return new Component({
            type: 'querySelector',
            query: query
        }, ctx);
    }

    /**
     * Mutates an arbitrary DOM node having an ID
    */
    mutate(id, props, val) {
        return new Component(id).mutate({
            prop: props,
            value: val
        });
    }

    /**
     * Returns an arbitrary DOM node as a Component
    */
    g(id) {
        return new Component(id);
    }

}

export const DOM = new DOMInterface();