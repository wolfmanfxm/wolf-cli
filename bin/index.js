/**
 * 完整脚手架实现
 */

let program = require('commander')
let { promisify } = require('util')
let asyncFiglet = promisify(require('figlet'))
let chalk = require('chalk')
let inquirer = require('inquirer')

let init = require('./init')

// 日志打印
const log = content => console.log(chalk.yellow(content))


// 版本/参数 配置
program.version('1.0.0')
program.option('-n --name <name>', 'output project name')

// 打印 logo
async function printLogo() {
    let data = await asyncFiglet('wolf-app')
    log(data)
}

program
    .command('create <app-name>')
    .description('create a project based on wolf')
    .action(async name => {
        await printLogo()
        log('prepare create project')
        let answer = await inquirer.prompt([
            {
                name: 'language',
                type: 'list',
                message: 'select development language',
                choices: ['Javascript', 'Typescript']
            }
        ])
        if (answer.language == 'Javascript') {
            log('download Javascript-wolf-cli')
            init(name)
        } else {
            log('wait the new version, thank you')
        }
    })


// console.log('process argv =>', process.argv)
// 参数解析
program.parse(process.argv)










