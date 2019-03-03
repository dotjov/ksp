const sls = {}

module.exports.createKsp = function (name, work) {
    if (typeof name !== 'string') throw new TypeError('The function `createKsp` need a string to the 1st parameter!')
    if (typeof work !== 'function') throw new TypeError('The function `createKsp` need a function to the 2nd parameter!')

    sls[name] = work
}

module.exports.runKsp = function (name, ...args) {
    if (typeof name !== 'string') throw new TypeError('The function `runKsp` need a string to the 1st parameter!')
    if (sls[name] == null || sls[name] === undefined) throw new TypeError('The Ksp ' + name + ' is undefined!')

    let func = sls[name].apply(this, args)
    if (func instanceof Promise) {
        return new Promise((resolve, reject) => {
            func.then((...args) => resolve.apply(this, args))
                .catch((...args) => reject.apply(this, args))
        })
    }
}