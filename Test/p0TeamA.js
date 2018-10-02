/* global p0TeamA, describe, it, expect, should */

describe('p0TeamA()', function () {
  'use strict';

  it('p0TeamA exists', function () {
    expect(p0TeamA).to.be.a('function');

  });


  it('modulo_first exists', function () {
    expect(modulo_first).to.be.a('function');
  });
  it('return modulo 2', function () {
    expect(modulo_first(2)).to.equal(2);
  });


  it('decrement_if_less_than_first exists', function () {
  expect(decrement_if_less_than_first).to.be.a('function');
 });
it('Works with 1 value', function () {
  expect(decrement_if_less_than_first([4])).to.eql([4]);
});

 it('Works with big lists', function(){
  expect(decrement_if_less_than_first([4,2,8,3,9,4,10,5,11,6,1])).to.eql([4,1,8,2,9,4,10,5,11,6,0]);
})


it('fact exists', function () {
  expect(fact).to.be.a('function');

});

it('fact(4) = 24', function () {
  expect(fact(4)).to.equal(24);
});

it('fact(10) = 3628800', function () {
  expect(fact(10)).to.equal(3628800);
});


it("Xor_21 exists", function ()
{
    expect(xor_21).to.be.a("function");
});

it("compute the xor 21 of 0", function ()
{
    expect(xor_21(0)).to.equal(21);
});

it("compute the xor 21 of -5", function ()
{
    expect(xor_21(-5)).to.equal(-18);
});



it('collatz exists', function () {
  expect(collatz).to.be.a('function');

});

it('collatz(4) = 2', function () {
  expect(collatz(4)).to.equal(2);
});

it('collatz(2) = 1', function () {
  expect(collatz(2)).to.equal(1);
});




  // Add more assertions here
});
