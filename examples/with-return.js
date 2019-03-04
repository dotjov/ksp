const ksp = require('ksp')
const run = ksp.runKsp

ksp.createKsp('some thing', () => {
    return 'Hello'
})

console.log(run('some thing'))
// => "Hello"