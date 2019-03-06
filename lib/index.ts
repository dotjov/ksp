import * as debug from 'debug'

const sls = {}
const debugKsp = debug.debug('ksp')

/**
 * Add a module to ksp
 *
 * @export
 * @param Function module Provide the module to add
 */
export function use(module: any) {
    debugKsp('register a new module!')
}

/**
 * Create a new Ksp work
 *
 * @export
 * @param {string} name Provide the name of the new ksp
 * @param {Function} run Provide the function to perform
 */
export function createKsp(name: string, run: Function) {
    if (typeof name !== 'string') throw new TypeError('The function `createKsp` need a string to the 1st parameter!')
    if (typeof run !== 'function') throw new TypeError('The function `createKsp` need a function to the 2nd parameter!')

    debugKsp('create a new ksp named %o', name)
    sls[name] = run
}

/**
 * Run a Ksp work
 *
 * @export
 * @param {string} name Provide the name of the ksp
 * @param {...any} args Provide the potential arguments
 * @returns {any} Will return the value/Promise
 */
export function runKsp(name: string, ...args: any): any {
    if (typeof name !== 'string') throw new TypeError('The function `runKsp` need a string to the 1st parameter!')
    if (sls[name] == null || sls[name] === undefined) throw new TypeError('The Ksp ' + name + ' is undefined!')

    debugKsp('run a ksp named %o', name)
    return sls[name].apply(this, args)
}