const inquirer = require('inquirer');

inquirer.prompt([
    // questions 交互参数清单
    {
        name: 'userName',
        type: 'input',
        message: 'what is your name ?'
    },
    {
        name: 'age',
        type: 'checkbox',   // space 空格选择（可多选）,回车确认
        message: 'what is your age ?',
        choices: ['20-30', '30-40', '40+']
    },
    {
        name: 'salary',
        type: 'list',       // enter 回车确认
        message: 'what is your salary ?',
        choices: ['20-30k', '30-40k', '40k+']
    },
]).then(answer => {
    // 最终所有信息的结果集
    console.log('answer =>', answer)
})