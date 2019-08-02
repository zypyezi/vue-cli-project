
// 基于quirer
// 设置的值可以通过 第二个参数oprions  访问到
// 问题类型  input, number, confirm, list, rawlist, expand, checkbox, password, editor 
// https://github.com/SBoudrias/Inquirer.js#question
module.exports = pkg => {
  const prompts = [
    {
      type: 'input',
      name: 'input',
      message: 'The locale of project localization.',
      validate: input => !!input,
      default: 'en'
    },
    {
      type: 'type',
      name: 'type',
      message: 'The locale of project localization.',
      choices: [ 
        { name: 'npm', value: 'npm' },
        { name: 'yarn', value: 'yarn' },
        { name: 'jspm', value: 'jspm', disabled: true }
      ]
    }
  ]

  // add dynamically prompt
  if ('@vue/cli-plugin-eslint' in (pkg.devDependencies || {})) {
    prompts.push({
      type: 'confirm',
      name: 'useESLintPluginVueI18n',
      message: 'Use ESLint plugin for Vue I18n ?'
    })
  }

  return prompts
}



// const { chalk } = require('@vue/cli-shared-utils')

// module.exports = [
//   {
//     name: 'historyMode',
//     type: 'confirm',
//     message: `Use history mode for router? ${chalk.yellow(`(Requires proper server setup for index fallback in production)`)}`,
//     description: `By using the HTML5 History API, the URLs don't need the '#' character anymore.`
//   }
// ]
