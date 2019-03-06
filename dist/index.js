"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug = __importStar(require("debug"));
var sls = {};
var debugKsp = debug.debug('ksp');
/**
 * Add a module to ksp
 *
 * @export
 * @param Function module Provide the module to add
 */
function use(module) {
    debugKsp('register a new module!');
}
exports.use = use;
/**
 * Create a new Ksp work
 *
 * @export
 * @param {string} name Provide the name of the new ksp
 * @param {Function} run Provide the function to perform
 */
function createKsp(name, run) {
    if (typeof name !== 'string')
        throw new TypeError('The function `createKsp` need a string to the 1st parameter!');
    if (typeof run !== 'function')
        throw new TypeError('The function `createKsp` need a function to the 2nd parameter!');
    debugKsp('create a new ksp named %o', name);
    sls[name] = run;
}
exports.createKsp = createKsp;
/**
 * Run a Ksp work
 *
 * @export
 * @param {string} name Provide the name of the ksp
 * @param {...any} args Provide the potential arguments
 * @returns {any} Will return the value/Promise
 */
function runKsp(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (typeof name !== 'string')
        throw new TypeError('The function `runKsp` need a string to the 1st parameter!');
    if (sls[name] == null || sls[name] === undefined)
        throw new TypeError('The Ksp ' + name + ' is undefined!');
    debugKsp('run a ksp named %o', name);
    return sls[name].apply(this, args);
}
exports.runKsp = runKsp;
