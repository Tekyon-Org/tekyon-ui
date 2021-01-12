/**
 * Navigation Icon Template
*/

import {Template} from '../../Core/Component';

export default Template(`
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