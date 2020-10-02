module.exports = {
  //指定代码的运行环境
  env: {
    browser: true,
    node: true,
    es6: true // 额外支持新的 ES6 全局变量, 如Set和Map
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser', //ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码
  // settings: {
  //   react: {
  //     pragma: 'React',
  //     version: 'detect'
  //   }
  // },
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    tsconfigRootDir: __dirname,
    ecmaVersion: 12, // 指定想要使用的 ECMAScript 版本
    ecmaFeatures: {
      jsx: true //指定ESLint可以解析JSX语法
    }
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    /** 箭头函数风格，按需使用花括号 */
    'arrow-body-style': ['error', 'as-needed'],
    /** 变量名规则，禁用以使用 ts 规则 */
    camelcase: 'off',
    /** 禁止类中出现不适用 this 的成员方法 */
    'class-methods-use-this': 'off',
    /** 悬挂逗号，只有在多行时要求保留悬挂逗号 */
    'comma-dangle': ['error', 'only-multiline'],
    /** 强制函数具有一致的返回行为 */
    'consistent-return': 'off',
    /** 派生类要求调用 super() */
    'constructor-super': 'error',
    /** 文件结尾要求携带换行符 */
    'eol-last': 'error',
    /** 要求 or 禁止命名函数表达式 */
    'func-names': 'off',
    /** Bad name 黑名单 */
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'boolean',
      'Boolean',
      'undefined',
      'Undefined'
    ],
    /** 使用正则匹配到的变量名、函数名报错 */
    'id-match': 'error',
    /** 单文件内允许的最大类数量 */
    'max-classes-per-file': ['error', 2],
    /** 单文件内最大行限制为 1000 */
    'max-lines': ['warn', 1000],
    /** 仅允许 console.warn/error  */
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ],
    /** 禁止在 switch 中的 case 子句中出现重复的测试表达式 */
    'no-duplicate-case': 'error',
    /** 禁止重复的导入语句 */
    'no-duplicate-imports': 'error',
    /** 禁止出现空块（存在注释的将忽略） */
    'no-empty': 'error',
    /**
     * 禁止 switch case 中无 break/return 等语句导致转移到下一条语句的情况
     * 例外：显示写下注释 - // fallthrough
     * link: https://eslint.org/docs/rules/no-fallthrough#top
     */
    'no-fallthrough': [
      'error',
      {
        commentPattern: 'fallthrough'
      }
    ],
    /**
     * 禁止非常规的空格
     * 例外：注释内容
     */
    'no-irregular-whitespace': [
      'error',
      {
        skipComments: true
      }
    ],
    /** 禁止在 else 块中仅存在 if/else 块 */
    'no-lonely-if': 'error',
    /** 禁止超过两行的空行，结尾空行不允许超过 1 行 */
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1
      }
    ],
    /** 禁止使用嵌套的三元表达式 */
    'no-nested-ternary': 'off',
    /** 禁止重新赋值函数参数，对象类型的参数允许修改内部属性 */
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    /** 禁用 ++ 、-- */
    'no-plusplus': 'off',
    /** 禁止重新声明 */
    'no-redeclare': 'error',
    /** 禁止特定全局变量 */
    'no-restricted-globals': 'off',
    /** 禁止使用特定的对象属性 */
    'no-restricted-properties': 'off',
    /**
     * 禁止特定语法，禁止使用 for in 语法
     */
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: '禁止使用 for in ！！'
      }
    ],
    /** 禁止直接返回赋值表达式，需要使用 () 包裹 */
    'no-return-assign': ['error'],
    /** 禁止在普通字符串中使用插值关键字 */
    'no-template-curly-in-string': 'error',
    /** 禁止尾随空格 */
    'no-trailing-spaces': 'error',
    /** 标识符中悬挂下划线 */
    'no-underscore-dangle': 'error',
    /** 禁止出现不可到达的代码 */
    'no-unreachable': 'error',
    /** 禁止无用的表达式 */
    'no-unused-expressions': 'off',
    /**
     * 禁止出现未使用的变量
     * 例外：1. 以 ‘_’ 开头的参数
     *      2. 以 ‘~’ 开头的异常名
     * link: https://eslint.org/docs/rules/no-unused-vars#top
     */
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        caughtErrorsIgnorePattern: '^~',
        argsIgnorePattern: '^_'
      }
    ],
    /**
     * 禁止声明前使用的行为
     * 例外：函数
     */
    'no-use-before-define': [
      'error',
      {
        functions: false
      }
    ],
    /** 禁止无用的构造函数，关闭以使用 ts 版的规则 */
    'no-useless-constructor': 'off',
    /** 禁止使用 var 标识符 */
    'no-var': 'error',
    /** 禁止使用 void 操作符 */
    'no-void': 'off',
    /**
     * 优先使用 const，解构时其中一个属性被重新赋值即可使用 let
     * link: https://eslint.org/docs/rules/prefer-const#top
     */
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    /**
     * 引号风格，使用单引号，需要转义时忽略，反斜号忽略
     */
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    /**
     * 禁止外部变量遮蔽，禁止遮蔽内建全局变量
     * 特例：命名为 args、item 的变量
     * */
    'no-shadow': [
      'error',
      {
        builtinGlobals: false,
        hoist: 'functions',
        allow: ['args', 'item']
      }
    ],
    /** 进行构造调用的函数名必须以大写字母开头 */
    'new-cap': [
      'error',
      {
        capIsNew: true,
        newIsCapExceptions: []
      }
    ],
    /**
     * 注释空格要求
     * link: https://eslint.org/docs/rules/spaced-comment#top
     */
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
        exceptions: ['-', '+', '*']
      }
    ],
    /**
        * @typescript-eslint 规则
        * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules
        /**---------------*/
    /** 禁止对非 thenable 的值进行 await */
    '@typescript-eslint/await-thenable': 'error',
    /** 禁用特定类型 */
    '@typescript-eslint/ban-types': 'off',
    /** 限制缩进风格 */
    // '@typescript-eslint/indent': [
    //     'error',
    //     4,
    //     {
    //         'SwitchCase': 1,
    //         'flatTernaryExpressions': true,
    //         'ignoredNodes': [
    //             'ConditionalExpression',
    //         ],
    //     },
    // ],
    /** 命名规范 */
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'snake_case', 'PascalCase'],
        leadingUnderscore: 'forbid'
      },
      // {
      //     'selector': 'variable',
      //     'types': ['function'],
      //     'format': ['camelCase', 'UPPER_CASE', 'snake_case', 'PascalCase'],
      //     'leadingUnderscore': 'forbid',
      // },
      {
        selector: 'property',
        format: ['camelCase', 'UPPER_CASE', 'snake_case', 'PascalCase'],
        leadingUnderscore: 'forbid'
      },
      {
        selector: 'class',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid'
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid'
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'snake_case'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        format: ['camelCase', 'snake_case'],
        leadingUnderscore: 'forbid'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase', 'camelCase', 'snake_case'],
        leadingUnderscore: 'forbid'
      }
    ],
    /** anyscript 各自处理 */
    '@typescript-eslint/no-explicit-any': 'off',
    /** 驼峰 */
    '@typescript-eslint/camelcase': 'off',
    /** function 返回类型 */
    '@typescript-eslint/explicit-function-return-type': 'off',
    /** 禁止空函数 */
    '@typescript-eslint/no-empty-function': 'error',
    /** 禁止无用的构造函数 */
    '@typescript-eslint/no-useless-constructor': 'error',
    // /** 禁止 for in */
    // '@typescript-eslint/no-for-in-array': 'error',
    // /** 禁止参数重赋值 */
    // "@typescript-eslint/no-param-reassign": "error",
    // /** 禁止使用 require 引入 */
    // '@typescript-eslint/no-require-imports': 'error',
    /** 禁止与布尔值进行比较 */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    /** 禁止不必要的命名空间和枚举 */
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    /** 禁止以变量赋值的形式使用 require，而是使用 import foo = require('foo') */
    '@typescript-eslint/no-var-requires': 'error',
    /** 优先使用命名空间定义模块 */
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    /** 强制使用分号 */
    '@typescript-eslint/semi': ['error', 'always'],
    /** 禁止不必要的重载写法 */
    '@typescript-eslint/unified-signatures': 'error',
    /** 禁止使用"!" */
    '@typescript-eslint/no-non-null-assertion': 'off',
    /**
        * @eslint-import 规则
        * https://github.com/benmosher/eslint-plugin-import
        /**---------------*/
    /** 如果模块仅导出一个名称，则首选使用默认导出 */
    'import/prefer-default-export': 'error',
    /** 文件扩展名列表 */
    'import/extensions': 'off',
    /** 禁止无法解析的模块引入 */
    'import/no-unresolved': 'off',
    /** 禁止引入废弃模块，警告级别 */
    'import/no-deprecated': 'warn',
    /** 禁止不在依赖列表的依赖引用 */
    'import/no-extraneous-dependencies': 'off',
    /**
        * @eslint-plugin-react 规则
        * https://www.npmjs.com/package/eslint-plugin-react
        /**---------------*/
    /** 强制对 props/state/context 使用一致的变量分配行为 */
    'react/destructuring-assignment': ['off', 'always'],
    /**
     * 强制组件方法排序，使组件结构更加清晰、统一
     * link: https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/sort-comp.md
     */
    'react/sort-comp': 'error',
    /** 状态不允许在构造函数中定义 */
    'react/state-in-constructor': ['error', 'never'],
    /** jsx 文件拓展名 */
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
      }
    ],
    /** 禁止使用扩展运算符向 jsx 传递 props，警告级别 */
    'react/jsx-props-no-spreading': 0,
    /**
        * @eslint-plugin-react-hooks 规则
        * https://www.npmjs.com/package/eslint-plugin-react
        /**---------------*/
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    /**
        * @eslint-plugin-jsx-a11y 规则
        * 主要都是可使用性相关的规则，能严格遵守其实更好.
        * Make the internet a better place. :)
        * https://www.npmjs.com/package/eslint-plugin-jsx-a11y
        /**---------------*/
    /** 禁止在非交互性的 html 元素上绑定事件 */
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    /**
     * 具有交互事件的静态元素必须制定其角色
     * link: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-static-element-interactions.md
     */
    'jsx-a11y/no-static-element-interactions': 'off',
    /** 强制可点击事件必须伴随一个键盘事件 */
    'jsx-a11y/click-events-have-key-events': 'off',
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    'no-continue': 0,
    // @tip1
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  overrides: [
    {
      // 配合@tip1来实现禁用对js的函数类型警告，启用ts和tsx文件的函数返回类型检查
      // https://github.com/typescript-eslint/typescript-eslint/blob/v4.1.0/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error']
      }
    }
  ]
};
