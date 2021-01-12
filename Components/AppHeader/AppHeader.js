/**
 * Tekyon UI Component
 * @component TUIHeader
 * A simple app header with elegant customization
*/

import './AppHeader.css';
//import NavIconTemplate from './NavigationIconTemplate';
import {Component} from '../../Core/Component';
import {DOM} from '../../Core/DOM';
export class AppHeader extends Component {

    /**
     * Tag name of the component
    */
    tag = "app-header";

    /**
     * Title of the header
    */
    title = null;

    /**
     * @constructor
    */
    constructor(id) {
        super(id);
    }

    /**
     * Sets the title of the header component
    */
    setTitle(title) {

        this.title = title;

        DOM.querySelector('[title]', this).mutate({
            prop: ['innerText'],
            value: title
        }, this).apply();

        return this;

    }

}