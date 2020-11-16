/**
 * Tekyon UI Components
 * Exports all of the UI components
*/

export {TUIHeader} from './Components/TUIHeader/TUIHeader';

/**
 * @method Template
 * Creates an HTML Template
*/
export function Template(content) {
    const template = document.createElement('template');
    template.innerHTML = content;

    return template.content;
}