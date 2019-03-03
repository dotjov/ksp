const ksp = require('ksp')
const run = ksp.runKsp

ksp.createKsp('some thing', (callback) => {
    // eg. get user from db
    callback(user)
})

run('some thing', (user) => {
    console.log(user.name)
})
// => "dotjov"