/**
 * Tekyon UI Component
 * @component TUIHeader
 * A simple app header with elegant customization
*/

import './TUIHeader.css';
import {Template} from './../../Components';

const NavTemplate = Template(`
    <style type="text/css">
        span#navButton {
            margin-right: 15px;
            cursor: pointer;
            border-radius: 50px;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            transition: background-color 100ms linear;
        }
        span#navButton > svg {
            fill: white;
            width: 18px;
            margin: auto;
        }
        span#navButton:hover {
            background-color: #0000001f;
        }
    </style>
    <span id='navButton'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
    </span>
`);
const Slot = Template(`<slot></slot>`);

export class TUIHeader extends HTMLElement {

    // Whether this header supports navigation
    navigation = null;

    /**
     * @constructor
    */
    constructor() {
        super();
        
        this.attachShadow({mode: 'open'});

        // Attach a navigation button if it's enabled
        this.shadowRoot.appendChild(NavTemplate.cloneNode(true));

        // Attach a slot for light DOM
        this.shadowRoot.appendChild(Slot.cloneNode(true));
    }

    /**
     * @static observedAttributes
     * Returns an array of element attributes to be observed
    */
    static get observedAttributes() {
        return ["navigation"];
    }

    /**
     * @callback connectedCallback
     * Called when element is connected to DOM
    */
    connectedCallback() {
        if(this.attributes['navigation'])
            this.navigation = this.attributes['navigation'].value;

    }

    /**
     * @callback disconnectedCallback
     * Called when element is disconnected from DOM
    */
    disconnectedCallback() {}

    /**
     * @callback attributeChangedCallback
     * Called when any of the observed attributes has changed
    */
    attributeChangedCallback(name, old, newval) {

    }
}

// Register the component
customElements.define('tui-header', TUIHeader);