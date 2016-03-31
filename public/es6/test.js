'use strict';

const sentences = [{
    s1: 'This',
    s2: 'is',
    s3: 'nice'

}, {
    s1: 'This',
    s2: 'is not',
    s3: 'nice'
}, ];

function output({
    s1,
    s2,
    s3
}) {
    console.log(`${s1} ${s2} ${s3}`);
}

for (let s of sentences) {
    output(s);
}
