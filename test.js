var index = require('./dist/index');
var assert = require('assert');

describe('use(run: Function): void', function () {
    it('testing', function () {
        assert.doesNotThrow(() => index.use(() => {}))
    })
})

describe('createKsp(name: string, run: Function): void', function () {
    it('create right function', function () {
        assert.doesNotThrow(() => index.createKsp('test 1', () => {}))
    })

    it('create wrong function by using !string', function () {
        assert.throws(() => index.createKsp(2, 'hello'))
    })

    it('create wrong function by using !function', function () {
        assert.throws(() => index.createKsp('test 2', 'hello'))
    })

    it('create return function', function () {
        assert.doesNotThrow(() => index.createKsp('test 3', (x, y) => {
            return x * y
        }))
    })

    it('create callback function', function () {
        assert.doesNotThrow(() => index.createKsp('test 4', (callback) => {
            callback('hello')
        }))
    })

    it('create promise function', function () {
        assert.doesNotThrow(() => index.createKsp('test 5', (x) => {
            return new Promise((resolve) => {
                setTimeout(() => resolve('promise'), x)
            })
        }))
    })
})

describe('runKsp(name: string, ...args: any): any', function () {
    it('testing no existing function', function () {
        assert.throws(() => index.runKsp('error'))
    })

    it('testing with !string', function () {
        assert.throws(() => index.runKsp(2))
    })

    it('testing return fonction', function () {
        assert.equal(index.runKsp('test 3', 2, 4), 8)
    })

    it('testing callback fonction', async function () {
        let call
        await index.runKsp('test 4', function (data) {
            call = data
        })

        assert.equal(call, 'hello')
    })

    it('testing promise fonction', async function () {
        let call
        await index.runKsp('test 5').then((data) => {
            call = data
        })

        assert.equal(call, 'promise')
    })
})