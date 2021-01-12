/**
 * Tekyon UI
 * App thread Event proxy
*/

import {Message} from './Message';

/**
 * Utility to generate unique IDs for event handlers
*/
var EventID = {
    counter: [],
    create: function(name) {
        if(!this.counter[name]) this.counter[name] = 0;
        var id = name + this.counter[name];
        this.counter[name]++;
        return id;
    }
}

/**
 * Stores all event handlers associated with their IDs
*/
export var Handlers = [];

class EventProxy {

    /**
     * Creates an event handler on the main thread, and proxies it to the app thread
    */
    addHandler(data) {
        var msg = {
            evt: data.event,
            props: data.props,
            evtId: EventID.create(data.id)
        };

        if(data.id) msg.id = data.id;
        else if(data.context) msg.context = data.context;

        Handlers[msg.evtId] = data.handler;

        self.postMessage(Message('event', msg));
    }

    /**
     * Starts listening for proxied event handler triggers from the main thread
    */
    listen(thread) {
        thread.addEventListener("message", (event) => {
            if(event.data.tui && event.data.t == 'event') {

                // Fire the handler
                Handlers[event.data.data.id](event.data.data.event);

            }
        });
    }

}

export var Event = new EventProxy();