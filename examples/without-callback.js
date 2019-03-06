const ksp = require('ksp')
const run = ksp.runKsp

ksp.createKsp('some thing', () => {
    console.log('done!')
})

run('some thing')
// => "done!"