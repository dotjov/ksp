const sls = {}

module.exports.use = function () {}

module.exports.createKsp = function (name, run) {
    if (typeof name !== 'string') throw new TypeError('The function `createKsp` need a string to the 1st parameter!')
    if (typeof run !== 'function') throw new TypeError('The function `createKsp` need a function to the 2nd parameter!')

    sls[name] = run
}

module.exports.runKsp = function (name, ...args) {
    if (typeof name !== 'string') throw new TypeError('The function `runKsp` need a string to the 1st parameter!')
    if (sls[name] == null || sls[name] === undefined) throw new TypeError('The Ksp ' + name + ' is undefined!')

    return sls[name].apply(this, args)
}