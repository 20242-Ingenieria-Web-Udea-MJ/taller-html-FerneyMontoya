import { keyCodes } from "./utils/keys-allowed.js";
import { isInputValid } from "./utils/is-input-value-valid.js";

/**
 * Handles the key press event.
 * 
 * @param {Event} event - The key press event object.
 * @returns {void}
 */
const keyPressed = (event) => {
    if (!keyCodes.includes(event.keyCode)) {
        event.preventDefault();
    } else if (event.keyCode === 13) {
        isInputValid();
    }
}

export { keyPressed };