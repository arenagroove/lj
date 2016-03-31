'use strict';

var sentences = [{
    s1: 'This',
    s2: 'is',
    s3: 'nice'

}, {
    s1: 'This',
    s2: 'is not',
    s3: 'nice'
}];

function output(_ref) {
    var s1 = _ref.s1;
    var s2 = _ref.s2;
    var s3 = _ref.s3;

    console.log(s1 + ' ' + s2 + ' ' + s3);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var s = _step.value;

        output(s);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}