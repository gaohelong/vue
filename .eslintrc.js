module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        "arrow-parens": 0, // 箭头函数用小括号括起来.
        "generator-star-spacing": 0, // 生成器函数*的前后空格.
        "indent": ["error", 4, {"SwitchCase": 1}], // 配置4个空格一个缩进，不符合配置时报错.
        "semi": ["error", "always"], // 语句强制分号结尾.
        "space-before-function-paren": ["error", "never"] // 强制在function的左括号之前使用一致的空格.
    }
}
