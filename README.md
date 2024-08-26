# Calculadora Web

Este proyecto es una calculadora web desarrollada con HTML, CSS, y JavaScript como parte de la materia **Ingeniería Web**. La calculadora permite realizar operaciones aritméticas básicas y ofrece una experiencia visual personalizada a través de la selección de temas de colores.

## Funcionalidades Principales

- **Selección de Temas**: El usuario puede elegir entre 3 temas de colores diferentes para la calculadora, adaptando la interfaz a sus preferencias visuales.
- **Operaciones Aritméticas**: La calculadora soporta operaciones básicas como suma, resta, multiplicación, y división.
- **Validación de Entradas**: Se implementó una expresión regular para validar las entradas del usuario, asegurando que solo se ingresen operaciones aritméticas válidas.
- **Manejo de Errores**: La calculadora maneja divisiones por cero, mostrando un mensaje de error en caso de que se intente realizar esta operación.
- **HTML Semántico**: Se utilizó HTML semántico siguiendo la metodología BEM para asegurar un código limpio y fácil de mantener.
- **Diseño Responsivo**: Se usaron Flexbox y Grid en CSS para estructurar la interfaz de manera eficiente, asegurando que la calculadora sea visualmente agradable en diferentes tamaños de pantalla.
- **Código Modular**: El código JavaScript se organizó de manera modular, aplicando buenas prácticas como la separación de responsabilidades y evitando la repetición de código.
- **Sistema de Diseño**: Se implementó un sistema de diseño con colores agradables que mejoran la experiencia del usuario.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura del documento y la accesibilidad.
- **CSS3**: Para el diseño visual, incluyendo Flexbox y Grid para la disposición de elementos.
- **JavaScript**: Para la lógica de la calculadora y la manipulación del DOM.

## Instrucciones de Uso

1. Abre el siguiente link `(https://ferneymontoya6.github.io/calculator-ingenieria-web/)` en tu navegador preferido.
2. Usa el selector de temas en la parte superior para cambiar el tema de la calculadora.
3. Ingresa una expresión aritmética utilizando los botones de la calculadora o usando tu teclado.
4. Presiona `=` para obtener el resultado. Si la expresión es inválida, se mostrará un mensaje de error.
5. Para reiniciar la calculadora, presiona el botón `RESET`.

## Estructura del Proyecto

### css/

- **initializr.css**: Archivo base con estilos iniciales.
- **styles.css**: Estilos generales aplicados a la calculadora.
- **theme1.css**: Estilos específicos para el Tema 1.
- **theme2.css**: Estilos específicos para el Tema 2.
- **theme3.css**: Estilos específicos para el Tema 3.

### js/

- **keep-focus.js**: Mantenimiento del foco en los elementos correctos.
- **key-clicked.js**: Gestión de los eventos de clic en los botones de la calculadora.
- **key-pressed.js**: Manejo de los eventos de teclado.
- **main.js**: Archivo principal donde se coordina la lógica de la calculadora.
- **toggle-theme.js**: Control del cambio de tema entre los tres estilos disponibles.

#### utils/

- **html-elements.js**: Manipulación de los elementos HTML de la calculadora.
- **is-input-value-valid.js**: Validación de las entradas del usuario.
- **keys-allowed.js**: Definición de las teclas permitidas.
- **round-decimal.js**: Funcionalidad para redondear decimales.


### index.html

- **index.html**: Estructura principal de la calculadora.


## Autor

Este proyecto fue desarrollado por **Ferney Montoya** como parte de la asignatura de Ingeniería Web.
