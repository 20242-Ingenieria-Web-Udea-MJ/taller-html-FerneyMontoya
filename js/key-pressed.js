import { input } from "./utils/html-elements.js";
import { keyCodes } from "./utils/keys-allowed.js";
import { roundDecimal } from "./utils/round-decimal.js";

const keyPressed = (event) => {
    if (!keyCodes.includes(event.keyCode)) {
        event.preventDefault();
    } else if (event.keyCode === 13) {
        const result = eval(input.value);
        
        roundDecimal(result);  
    }
}

export { keyPressed };