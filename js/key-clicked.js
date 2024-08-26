import { input } from "./utils/html-elements.js";
import { isInputValid } from "./utils/is-input-value-valid.js";

/**
 * Handles the click event on a key.
 * 
 * @param {Event} event - The click event object.
 * @returns {void}
 */
const keyClicked = (event) => {
    if (event.target.textContent === 'RESET') {
        input.value = '';
    } else if (event.target.textContent === 'DEL') {
        input.value = input.value.slice(0, -1);
    } else if (event.target.textContent === '=') {
        isInputValid();  
    } else if (event.target.textContent.length <= 5) {
        input.value += event.target.textContent;
    }
};

export { keyClicked };