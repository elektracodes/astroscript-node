'use strict';

const assert = require('chai').assert;
const mathutils = require('../lib/mathutils.js');
const points = require('../lib/points.js');

const ddd = mathutils.ddd;
const radians = mathutils.radians;
const degrees = mathutils.degrees;

const theta = radians(55.75);
const eps = radians(ddd(23, 26, 39.3202));
const ramc = radians(ddd(345, 33, 19.2045));


describe('Sensitive points', () => {
    it('Midheaven', () => {
        const got = degrees(points.midheaven(ramc, eps));
        assert.approximately(got, ddd(344, 19, 2), 1E-3);
    });
    it('Ascendant', () => {
        const got = degrees(points.ascendant(ramc, eps, theta));
        assert.approximately(got, ddd(110, 9, 26), 1E-4);
    });
    it('Vertex', () => {
        const got = degrees(points.vertex(ramc, eps, theta));
        assert.approximately(got, ddd(242, 42, 13), 1E-4);
    });
    it('East Point', () => {
        const got = degrees(points.eastpoint(ramc, eps));
        assert.approximately(got, 76.70363, 1E-4);
    });

});
