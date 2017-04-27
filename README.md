[![Build Status](https://travis-ci.org/ULL-ESIT-DSI-1617/ull-shape-alu0100769579.svg?branch=master)](https://travis-ci.org/ULL-ESIT-DSI-1617/ull-shape-alu0100769579)

## Práctica: Evaluar Módulos

### ull-shape-alu0100769579

#### Install

    ```js
    npm install @alu0100769579/ull-shape-alu0100769579
    ```

#### Use

    ```js
    require('@alu0100769579/ull-shape-alu0100769579');
    ```

### Documentación

- [Shape](https://ull-esit-dsi-1617.github.io/ull-shape-alu0100769579/)
- [Triangle](https://ull-esit-dsi-1617.github.io/ull-shape-triangle-alu0100769579/)
- [Rectangle](https://ull-esit-dsi-1617.github.io/ull-shape-rectangle-alu0100769579/)
- [Square](https://ull-esit-dsi-1617.github.io/ull-shape-square-alu0100769579/)
 
### Repositorios

- [Principal](https://github.com/ULL-ESIT-DSI-1617/evaluar-modulos-alu0100769579)
- [Shape](https://github.com/ULL-ESIT-DSI-1617/ull-shape-alu0100769579)
- [Triangle](https://github.com/ULL-ESIT-DSI-1617/ull-shape-triangle-alu0100769579)
- [Rectangle](https://github.com/ULL-ESIT-DSI-1617/ull-shape-rectangle-alu0100769579)
- [Square](https://github.com/ULL-ESIT-DSI-1617/ull-shape-square-alu0100769579)
 
### Paquetes NPM

- [Shape](https://www.npmjs.com/package/@alu0100769579/ull-shape-alu0100769579)
- [Triangle](https://www.npmjs.com/package/@alu0100769579/ull-shape-triangle-alu0100769579)
- [Rectangle](https://www.npmjs.com/package/@alu0100769579/ull-shape-rectangle-alu0100769579)
- [Square](https://www.npmjs.com/package/@alu0100769579/ull-shape-square-alu0100769579)

### Autor

- [Página personal Raúl Martín Morales](https://alu0100769579.github.io/RaulMartinMorales/)

### Descripción

Uno de los objetivos de esta práctica  es aprender a crear packages NodeJS y publicarlos en [npm](https://www.npmjs.com). El paquete se construye a partir de un repo [ULL-ESIT-DSI-1617/evalua-module](https://github.com/ULL-ESIT-DSI-1617/evalua-module)
que contiene una solución a la [práctica evaluar strategy pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaevaluastrategypattern.html).

En esta tarea deberá trabajar con varios repos, uno para el módulo principal `ull-shape` y uno para cada shape específica: cree los diferentes repos dentro de la organización `ULL-ESIT-DSI-1617` siguiendo el patrón `ull-shape-team` para el módulo principal y `ull-shape-team-triangle` para el del triángulo, etc.

### Hitos

1. Puede partir del [repo de GitHub dado por la asignación de esta tarea ULL-ESIT-DSI-1617/evalua-module](https://github.com/ULL-ESIT-DSI-1617/evalua-module). Este repo contiene una solución usando el strategy-pattern al problema de eliminar el switch smell en el cálculo del área de las Shapes. Puede usarlo para crear el resto de los repos necesarios para esta práctica
2. Se trata de construir un primer módulo npm `ull-shape` con el código de la clase `Shape`
3. Se construirá un módulo npm `ull-shape-triangle` que contenga la clases `Triangle`
4. En general, para cada tipo particular de forma geométrica `x` se construirá un módulo npm `ull-shape-x` que contenga la clase `X`
5. La implantación del módulo principal `ull-shape` se hace primero 
  - La implementación de los plugin `ull-shape-x` se hace después
  - La implantación de los plugin `ull-shape-x` no debería conllevar, la modificación del código del módulo principal `ull-shape`(principio Open/Close)
6. Como deberán publicar en el site de [npm](https://www.npmjs.com) los módulos asegúrense de ponerle a sus paquetes un nombre único que no coincida con el de los otros alumnos, por ejemplo `ull-shape-team-name` y `ull-shape-x-team-name`
7. Escriba documentación para cada uno de los módulos (Véase [documentation.js](http://documentation.js.org/), [jsdoc](https://www.npmjs.com/package/jsdoc), [docco](http://jashkenas.github.io/docco/))
8. Añada pruebas para cada uno de los módulos
9. Integre usando Travis

### Referencias

* Véase la sección
[Creación de Paquetes y Módulos en NodeJS](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/npm/nodejspackages.html)
* Documentación:  [documentation.js](http://documentation.js.org/), [jsdoc](https://www.npmjs.com/package/jsdoc), [docco](http://jashkenas.github.io/docco/))
* Véase la sección [Gulp](../apuntes/gulp/README.md)
* [Apuntes: Code Smells](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/codesmell.html)
* [Principios de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/designprinciples.html)
* [Patrones de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/)
* [ECMAScript 6 Power Tutorial: Class and Inheritance](https://code.tutsplus.com/tutorials/ecmascript-6-power-tutorial-class-and-inheritance--cms-24117)
* [Object-Oriented JavaScript — A Deep Dive into ES6 Classes](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)
* [Strategy Pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/strategypattern.html)
* [Apuntes: Pruebas. Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Apuntes: Pruebas. Should](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html#shouldl)
* [Apuntes: Integración Contínua. Travis](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/travis.html)

