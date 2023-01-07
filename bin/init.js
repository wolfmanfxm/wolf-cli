/**
 * 项目下载 clone
 */

let { promisify } = require('util')
const ora = require('ora')
const download = promisify(require('download-git-repo'))
const chalk = require('chalk')
const shell = require('shelljs')



// 日志打印
const log = content => console.log(chalk.yellow(content))


module.exports = async appName => {
    log(`🚀 create a new project ${appName}`)
    shell.rm('-rf', appName)
    const spinner = ora('downloading...').start()
    try {
        await download('direct:https://github.com/wolfmanfxm/charts.git', appName, { clone: true })
        spinner.succeed('download success')
        log(`
download finished, please execute the following command to start:
====================================================================
cd ${appName}
npm install
npm run dev
        `)
    } catch (error) {
        log('download error', error)
        spinner.stop()
    }
}















