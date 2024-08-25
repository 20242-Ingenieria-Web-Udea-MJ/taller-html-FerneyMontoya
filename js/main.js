import { input } from "./utils/html-elements.js";
import { keyBoard } from "./utils/html-elements.js";
import { keepFocus } from "./keep-focus.js";
import { keyPressed } from "./key-pressed.js";
import { keyClicked } from "./key-clicked.js";

// Evento para mantener el foco en el input
window.onload = keepFocus;
input.addEventListener('blur', keepFocus);

// Escuchador de eventos para las teclas PRESIONADAS
input.addEventListener('keydown', (event) => { 
  keyPressed(event);
});

// Escuchador de eventos para las teclas CLICKEADAS
keyBoard.addEventListener('click', (event) => { 
  keyClicked(event);
});

