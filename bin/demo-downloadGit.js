const download = require('download-git-repo')

// download('仓库地址', '下载目录路径（无绝对路径会默认在当前项目的根目录下）', { 配置参数 }, 错误时的回调函数)
download('direct:https://github.com/wolfmanfxm/vue3-koa2.git', 'fang', { clone: true }, function (err) {
    console.log(err ? 'Error' : 'Success')
})
// 下载到 wolf-app/fang
