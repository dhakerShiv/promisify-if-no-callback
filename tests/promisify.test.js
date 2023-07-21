const { expect } = require('chai');
const promisify = require('../src/');

function asyncFunction(arg1, arg2, callback) {
    setTimeout(() => {
        callback(null, arg1 + arg2);
    }, 100);
}

const promisifiedFunction = promisify(asyncFunction);

describe('promisify', () => {
    it('should return a function', () => {
        expect(promisifiedFunction).to.be.a('function');
    });

    it('should resolve with correct result when valid arguments are provided', async () => {
        const result = await promisifiedFunction(2, 3);
        expect(result).to.equal(5);
    });

    it('should allow callback-style usage when a callback is provided as the last argument', (done) => {
        promisifiedFunction(2, 3, (err, result) => {
            expect(err).to.equal(null);
            expect(result).to.equal(5);
            done();
        });
    });
});
