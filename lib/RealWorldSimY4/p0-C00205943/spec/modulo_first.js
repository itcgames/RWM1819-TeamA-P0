var path = require('path');
var expect = require('chai').expect;

var modulo_first = require(path.join(__dirname, '..', './modulo_first.js'));

describe('modulo_first()', function () {
  'use strict';

  it('exists', function () {
    expect(modulo_first).to.be.a('function');

  });

  it('Output 4', function () {
    expect(modulo_first(4)).to.equal(0);
  });

  it('Output 2', function () {
    expect(modulo_first(2)).to.equal(2);
  });

  it('Output 8', function () {
    expect(modulo_first(8)).to.equal(0);
  });

  it('Output 3', function () {
    expect(modulo_first(3)).to.equal(0);
  });

  it('Output 9', function () {
    expect(modulo_first(9)).to.equal(3);
  });

  it('Output 10', function () {
    expect(modulo_first(10)).to.equal(2);
  });

  it('Output 5', function () {
    expect(modulo_first(5)).to.equal(1);
  });

  it('Output 11', function () {
    expect(modulo_first(11)).to.equal(3);
  });

  it('Output 6', function () {
    expect(modulo_first(6)).to.equal(2);
  });
  // Add more assertions here
});
