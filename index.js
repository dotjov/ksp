const sls = {}

module.exports.createKsp = function (name, work) {
    if (typeof name !== 'string') {
        console.error('The function `createKsp` need a string to the 1st parameter!')
        process.exit(0)
    }
    if (typeof work !== 'function') {
        console.error('The function `createKsp` need a function to the 2nd parameter!')
        process.exit(0)
    }

    sls[name] = work
}

module.exports.runKsp = function (name, ...args) {
    if (typeof name !== 'string') {
        console.error('The function `runKsp` need a string to the 1st parameter!')
        process.exit(0)
    }

    let func = sls[name].apply(this, args)
    if (func instanceof Promise) {
        return new Promise((resolve, reject) => {
            func.then((...args) => resolve.apply(this, args))
                .catch((...args) => reject.apply(this, args))
        })
    }
}