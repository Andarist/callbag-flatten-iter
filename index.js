const fromIter = require("callbag-from-iter");
const flatten = require("callbag-flatten");
const map = require("callbag-map");

const flattenIter = source => flatten(map(i => fromIter(i))(source));

module.exports = flattenIter;
