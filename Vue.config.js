// module.exports = {
//     devServer: {
//         port: 8081,
//         open: true,
//         proxy: {
//             "/api": {
//                 // 允许访问数据的计算机名称及端口
//                 target: 'http://w5chdi.natappfree.cc/',
//                 changeOrigin: true, //开启代理跨域
//                 pathRewrite: {
//                     // 重写api地址
//                     '^/api': "api"
//                 }
//             }

//         }
//     }
// }