const ksp = require('ksp')
const run = ksp.runKsp

ksp.createKsp('some thing', () => {
    return new Promise((resolve, reject) => {
        // eg. get random quote from 'rand-quote'
        resolve(body, author)
        // or
        reject('Request error')
    })
})

run('some thing')
    .then((body, author) => {
        console.log(body + ' -' + author)
    })
    .catch((err) => {
        console.log(err)
    })
// => "The great fun in my life has been getting up every morning and rushing to the typewriter because some new idea has hit me." -Ray Bradbury