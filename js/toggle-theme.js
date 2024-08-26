import { toggleCircle } from "./utils/html-elements.js";
import { themeFile } from "./utils/html-elements.js";

/**
 * Toggles the theme of the calculator.
 * 
 * @function toggleTheme
 * @returns {void}
 */
const toggleTheme = () => { 
  const currentTheme = themeFile.href.split('/').pop().split('.')[0];
  
  switch (currentTheme) {
    case 'theme1':
      themeFile.href = "./css/theme2.css";
      toggleCircle.style.transform = 'translateX(125%)';
      break;
    case 'theme2':
      themeFile.href = "./css/theme3.css";
      toggleCircle.style.transform = 'translateX(265%)';
      break;
      case 'theme3':
        themeFile.href = "./css/theme1.css";
        toggleCircle.style.transform = 'translateX(0%)';
      break;
  }
}

export { toggleTheme };