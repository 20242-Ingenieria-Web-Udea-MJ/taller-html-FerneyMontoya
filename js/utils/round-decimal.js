import { input } from "./html-elements.js";

/**
 * Rounds a decimal number to two decimal places and updates the value of the input element.
 * 
 * @param {number} result - The decimal number to be rounded.
 * @returns {void}
 */
const roundDecimal = (result) => {    
    if (result % 1 !== 0) {
        input.value = result.toFixed(2);
    } else {        
        input.value = result;
    }
}

export { roundDecimal };