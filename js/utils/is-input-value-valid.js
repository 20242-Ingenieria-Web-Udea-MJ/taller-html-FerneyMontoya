import { input } from "./html-elements.js";
import { invalidAlert } from "./html-elements.js";
import { roundDecimal } from "./round-decimal.js";

const regex = /^-?(\d*\.?\d+)([+\-*/]-?(\d*\.?\d+))*$/;

const isInputValid = () => {
    const isRegexValid = regex.test(input.value);
    const isDivedeByZero = input.value.includes('/0');
    
    if (isRegexValid && !isDivedeByZero) {
        invalidAlert.classList.add('hidden');
        input.classList.remove('outline-red');

        const result = eval(input.value);

        roundDecimal(result);      
    } else {
        invalidAlert.classList.remove('hidden');
        input.classList.add('outline-red');
    }
}

export { isInputValid };