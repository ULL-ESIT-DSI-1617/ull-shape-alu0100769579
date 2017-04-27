'use strict';

/**
 * Paquete npm de Shape
 * 
 * Autor: Raúl Martín Morales
 * 
 * Aquí creamos la clase padre Shape.
 * 
 * @param {hash} options
 * @param {string} shape
 */

class Shape {
    
    /**
    * @construct Shape
    * @param{hash} options Ancho y Alto
    * @param{string} shape Shape
    */
    constructor(options, shape) {
        Object.assign(this, options);
        this.shape =  shape || this.constructor.name;
    }

    /**
    * @function getArea
    * @return {value} retorna el valor del area de cualquier forma geométrica a la que apunte el objeto
    */
    
    getArea() {
        try {
            let shape = this;
            if (this.constructor.name === 'Shape') 
                shape = new Shape.Shapes[this.shape](this);
            return shape.area();
        }
        catch(e) {
            console.error(`Can't compute area of '${this.shape}' shape.`);
            return null;
        }
    }
}

Shape.Shapes = Shape.Shapes || {};
module.exports = Shape;

