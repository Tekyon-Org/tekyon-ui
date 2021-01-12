/**
 * Tekyon UI
 * Event client
 * Receives event handler requests from the app thread, proxies events
*/

import {Message} from '../Message';

var EventHandlers = [];

class EventClient {

    handle(data, worker) {

        var node;

        // Event listener on a DOM node with an ID
        if(data.id) {
            node = document.getElementById(data.id);
        }

        // Event listener on an object
        else if(data.context) {
            node = eval(data.context);
        }

        node.addEventListener(data.evt, (event) => {
            var evtData = data.props.reduce((a, e) => (a[e] = event[e], a), {});

            worker.postMessage(Message('event', {
                id: data.evtId,
                event: evtData
            }));
        });

    }

}

export default new EventClient;