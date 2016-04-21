var Promise = require('bluebird');

async function foo() {
    console.log('foo');
    await Promise.delay(500);
    console.log('bar');
}

foo();