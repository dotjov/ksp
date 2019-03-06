/**
 * Add a module to ksp
 *
 * @export
 * @param Function module Provide the module to add
 */
export declare function use(module: any): void;
/**
 * Create a new Ksp work
 *
 * @export
 * @param {string} name Provide the name of the new ksp
 * @param {Function} run Provide the function to perform
 */
export declare function createKsp(name: string, run: Function): void;
/**
 * Run a Ksp work
 *
 * @export
 * @param {string} name Provide the name of the ksp
 * @param {...any} args Provide the potential arguments
 * @returns {any} Will return the value/Promise
 */
export declare function runKsp(name: string, ...args: any): any;
