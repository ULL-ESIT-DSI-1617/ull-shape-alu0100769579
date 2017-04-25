"use strict";
var Shape = require('../shapesarea.js');
var Triangle = require('@alu0100769579/ull-shape-triangle-alu0100769579.js');
var Square = require('@alu0100769579/ull-shape-square-alu0100769579.js');
var Rectangle = require('@alu0100769579/ull-shape-rectangle-alu0100769579.js');
require("should");

describe("getArea", function() {
  it("must compute the triangle area correctly. Shape object", function() {
    let a = new Shape({ width: 100, height: 50 }, 'Triangle');
    let s = a.getArea();
    s.should.equal(2500);
  })
  it("must compute the triangle area correctly. Triangle object", function() {
    let a = new Triangle({ width: 100, height: 50 });
    let s = a.getArea();
    s.should.equal(2500);
  })
});
