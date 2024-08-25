import { input } from "./utils/html-elements.js";
import { roundDecimal } from "./utils/round-decimal.js";

const keyClicked = (event) => {
    if (event.target.textContent === 'RESET') {
        input.value = '';
    } else if (event.target.textContent === 'DEL') {
        input.value = input.value.slice(0, -1);
    } else if (event.target.textContent === '=') {
        const result = eval(input.value);
        roundDecimal(result);   
    } else if (event.target.textContent.length <= 5) {
        input.value += event.target.textContent;
    }
};

export { keyClicked };