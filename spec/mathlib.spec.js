var MathLib = require('../src/mathlib');

'use strict';

describe("#add", function () {
  it("should add 2 and 2", function () {
    var result = MathLib.add(2, 2);
    expect(result).toEqual(4);
  });
  it("should add 4 and 4", function () {
    var result = MathLib.add(4, 4);
    expect(result).toEqual(8);
  });
});

describe("#subtract", function () {
  it("should subtract 2 from 4", function () {
    var result = MathLib.subtract(4, 2);
    expect(result).toEqual(2);
  });
  it("should subtract 4 from 8", function () {
    var result = MathLib.subtract(8, 4);
    expect(result).toEqual(4);
  });
});

describe("#multiply", function () {
  it("should multiply 2 by 2", function () {
    var result = MathLib.multiply(2, 2);
    expect(result).toEqual(4);
  });
  it("should multiply 4 by 4", function () {
    var result = MathLib.multiply(4, 4);
    expect(result).toEqual(16);
  });
});

describe("#devde", function () {
  it("should devide 4 by 2", function () {
    var result = MathLib.devide(4, 2);
    expect(result).toEqual(2);
  });
  it("should devide 8 by 4", function () {
    var result = MathLib.devide(8, 4);
    expect(result).toEqual(2);
  });
});
