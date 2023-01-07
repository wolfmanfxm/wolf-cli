let figlet = require('figlet')

// 第一种 : callback 方式
figlet('Hello World', function (err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data)
})

// 第二种 : async await 方式
// util : nodejs 自带的工具库； promisify : 将函数变为 promise ；
let { promisify } = require('util')
let asyncFiglet = promisify(figlet)

async function logo() {
    try {
        let data = await asyncFiglet('Wolf App')
        console.log(data)
    } catch (error) {
        console.log(err)
    }
}

logo()