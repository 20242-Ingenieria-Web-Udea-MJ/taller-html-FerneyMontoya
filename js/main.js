import { input } from "./utils/html-elements.js";
import { keyBoard } from "./utils/html-elements.js";
import { togglePicker } from "./utils/html-elements.js";
import { keepFocus } from "./keep-focus.js";
import { keyPressed } from "./key-pressed.js";
import { keyClicked } from "./key-clicked.js";
import { toggleTheme } from "./toggle-theme.js";

/**
 * Main JavaScript file for the calculator application.
 * @fileoverview This file contains the main logic and event listeners for the calculator.
 * @module main
 */

/**
 * Event listener for keeping the focus on the input field.
 * @function keepFocus
 */
window.onload = keepFocus;
input.addEventListener('blur', keepFocus);

/**
 * Event listener for toggling the color theme.
 * @function toggleTheme
 */
togglePicker.addEventListener('click', () => {
  toggleTheme();
});

/**
 * Event listener for handling keydown events.
 * @function keyPressed
 * @param {Event} event - The keydown event object.
 */
input.addEventListener('keydown', (event) => { 
  keyPressed(event);
});

/**
 * Event listener for handling click events on the keyboard.
 * @function keyClicked
 * @param {Event} event - The click event object.
 */
keyBoard.addEventListener('click', (event) => { 
  keyClicked(event);
});
