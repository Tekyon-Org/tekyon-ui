/**
 * Tekyon UI Components
 * Exports all of the UI components
*/

import {Message} from './Message';
import {Event} from './Event';

/**
 * @class Component
 * Defines the basic structure of a Component
*/
export class Component {

    tag = null;
    id = null;
    special = null;

    /**
     * Pending mutations to be run on the live DOM for this component
    */
    mutations = [];

    constructor(id, ctx) {

        if(typeof ctx != "undefined")
            if(typeof id == "object") id.parent = ctx.id;
            
        this.id = id;

    }

    /**
     * Creates a mutation of the component and adds it to the batch
    */
    mutate(mutation, ctx) {
        var store = typeof ctx=="undefined" ? this.mutations : ctx.mutations;
        store.push({
            t: 'dom',
            id: this.id,
            prop: mutation.prop,
            val: mutation.value
        });

        return (typeof ctx=="undefined" ? this : ctx);
    }

    /**
     * Edits CSS styles of the component on the live DOM
    */
    style(styles, repaint) {
        this.mutations.push({
            t: 'style',
            id: this.id,
            styles: styles,
            r: typeof repaint=="undefined" ? false : repaint
        });

        return this;
    }

    /**
     * Applies the pending DOM mutations for this component to the live DOM
    */
    apply() {
        self.postMessage(Message('dom', this.mutations));
    }

    /**
     * Creates a proxied event listener for the event on the main thread
    */
    on(event, handler, props) {
        Event.addHandler({
            id: this.id,
            event: event,
            props: typeof props=="undefined" ? [] : props,
            handler: handler
        });
    }

}

/**
 * @method Template
 * Creates an HTML Template
*/
export function Template(content) {
    const template = document.createElement('template');
    template.innerHTML = content;

    return template.content;
}