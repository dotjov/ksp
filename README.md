# ksp

[![npm version](https://img.shields.io/npm/v/ksp.svg)](https://www.npmjs.com/package/ksp)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/ksp.svg)](https://www.npmjs.com/package/ksp)
[![license](https://img.shields.io/npm/l/ksp.svg)](https://github.com/dotjov/ksp/blob/master/LICENSE)

A simple framework for build your app more easiest !

**To improve the usefulness of ksp, I will create modules like ksp-express, which will allow you to create websites in a few lines. I will update this section.**

## Install

```
$ npm install ksp
```

## Usage

```js
const ksp = require('ksp')
const run = ksp.runKsp // or use ksp.runKsp() instead of create a const

ksp.createKsp('some thing', (message) => {
    console.log(message)
})

run('some thing', 'done!')
// => "done!"
```

More example can be found [here](https://github.com/dotjov/ksp/blob/master/examples/) (eg. callback function/promise/return)

## Methods

##### createKsp(name: string, run: function)

```js
ksp.createKsp('some thing', (callback) => {
    // eg. get user from db
    callback(user)
})
```

##### runKsp(name: string, ...args)

```js
ksp.runKsp('some thing', (user) => {
    console.log(user.name)
})
```

## License

MIT License

Copyright (c) 2019 dotjov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.