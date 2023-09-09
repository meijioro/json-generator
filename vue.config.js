// module.exports = {
//   chainWebpack: config => config.resolve.extensions.prepend('.mjs')
// }


// module.exports = {
//   publicPath: "./",
//   productionSourceMap: false,
//   lintOnSave: process.env.NODE_ENV !== "production",

//   configureWebpack: {
//     plugins: new createAttributeRemover(),
//     module: {
//       rules: [
//         {
//           test: /\.vue$/,
//           use: {
//             loader: "vue-loader",
//             options: {
//               compilerOptions: {
//                 modules: [createAttributeRemover("data-testid")]
//               }
//             }
//           }
//         }
//       ]
//     }
//   },
// };