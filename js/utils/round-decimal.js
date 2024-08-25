import { input } from "./html-elements.js";

const roundDecimal = (result) => {    
    if (result % 1 !== 0) {
        input.value = result.toFixed(2);
    } else {
        input.value = result;
    }
}

export { roundDecimal };