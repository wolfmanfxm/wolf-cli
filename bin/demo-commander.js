const { program } = require('commander');

program.version('wolf/1.0.0')   // 设置版本号

program.option('-t --time', 'show project time')
program.option('-n --name <name>', 'show project name')

program
    .command('create <project-name>')
    .description('create a project based on wolf')
    .action(name => {
        console.log('project name =>', name)
    })

program.parse();

const options = program.opts();
console.log('opts =>', options)