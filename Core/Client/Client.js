/**
 * Tekyon UI
 * Client, lives on the Main thread
 * Responds to commands from the app worker
*/

import DOM from './DOM';
import EventClient from './Event';

export class AppClient {

    listen(context) {

        context.addEventListener("message", (event) => {
            if(event.data.tui) {
                if(event.data.t == 'dom') {
                    DOM.run(event.data.data);
                }
                else if(event.data.t == 'event') {
                    EventClient.handle(event.data.data, context);
                }
            }
        });

    }

}

export var Client = new AppClient();