## 安装 rollup

`npm install rollup --save-dev`

##  rollup-plugin-node-resolve

这个 [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve) 插件可以告诉 Rollup 如何查找外部模块

`npm install --save-dev rollup-plugin-node-resolve`

```javascript
import resolve from "rollup-plugin-node-resolve";

export default {
  ...
  plugins: [ resolve() ]
  
}
```

## rollup-plugin-commonjs

用来将 CommonJS 转换成 ES2015 模块的。请注意， `rollup-plugin-commonjs` 应该用在其他插件转换你的模块*之前* - 这是为了防止其他插件的改变破坏 CommonJS 的检测。

```javascript
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default {
    ...
	plugins: [resolve(), commonjs()]
}
```

## 压缩 bundle

```bash
npm install --save-dev rollup-plugin-uglify
```

```javascript
import uglify from "rollup-plugin-uglify";

export default {
  plugins: [
    process.env.NODE_ENV === "production" && uglify()
  ]
};
```

## 使用eslint

> 安装

```bash
 yarn add eslint rollup-plugin-eslint -D
```

> 配置

`.eslintrc.js`

```js
module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        sourceType: "module"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
};

```

`rollup.config.js`

```js
import { eslint } from "rollup-plugin-eslint";

export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'MyBundle'
  },
  plugins: [
    eslint({
      include: ["src/**"],
      exclude: ["node_modules/**"],
    }),
  ]
};
```



## 使用`Babel`

> 安装

```bash
yard add @babel/core rollup-plugin-babel @babel/present-env -D
```

> 配置

`babel.config.js`

``` js
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
      },
    ],
  ],
}
```

`rollup.config.js`

```js
import { eslint } from "rollup-plugin-eslint";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'MyBundle'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    eslint({
      include: ["src/**"],
    }),
    babel({
      exclude: "node_modules/**"
    })
  ]
};
```

## 使用Prettier

> 安装

```bash
yarn add prettier -D
```

> 配置

`.prettierrc.js`

```js
module.exports = {
  printWidth: 100, // 每行代码长度（默认80）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）ab进行缩进（默认false）
  useTabs: false, // 是否使用t
  singleQuote: true, // 使用单引号（默认false）
  semi: true, // 声明结尾使用分号(默认true)
  trailingComma: 'all', // 多行使用拖尾逗号（默认none）
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
  jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'avoid',
};
```

## 使用Jest

> 安装

```bash
yarn add jest babel-jest -D
```

> 配置

`jest.config.js`

```js
module.exports = {
  testEnvironment: 'jsdom', // 默认JSdom
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      'babel-jest', {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: true,
              },
            },
          ],
        ],
      },
    ],
  },
  testMatch: ['**/_tests_/**/*.spec.js'],
  // roots: ['<rootDir>'],
 }
```



## 使用Typescript

> 安装

```bash
 yarn add typescript rollup-plugin-typescript2 -D
```

> 配置

`rollup.config.js`

``` js
import nodeResolve from "rollup-plugin-node-resolve";
import typescript from 'rollup-plugin-typescript2';

export default {
  input: './main.ts',
  output: {
    file: './dist/index.js',
    format: 'umd',
    name: 'MyBundle'
  },
  plugins: [
    nodeResolve(),
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
    }),
  ]
};
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./lib", // 输出目录
    "sourceMap": false, // 是否生成sourceMap
    "target": "esnext", // 编译目标
    "module": "esnext", // 模块类型
    "moduleResolution": "node",
    "allowJs": false, // 是否编辑js文件
    "strict": true, // 严格模式
    "noUnusedLocals": true, // 未使用变量报错
    "experimentalDecorators": true, // 启动装饰器
    "resolveJsonModule": true, // 加载json
    "esModuleInterop": true,
    "removeComments": false, // 删除注释
    "declaration": true, // 生成定义文件
    "declarationMap": false, // 生成定义sourceMap
    "declarationDir": "./lib/types", // 定义文件输出目录
    "lib": ["esnext", "dom"],  // 导入库类型定义
    "types": ["node"] // 导入指定类型包
  },
  "exclude": [
    "node_modules"
  ],
  "include": ["./src"]
}
```



## 使用 Ts+Eslint

> 安装

```bash
yarn add @typescript-eslint/parser
```

> 配置

`.eslintrc.js`

``` js
const path = require('path')
const DOMGlobals = ['window', 'document']
const NodeGlobals = ['module', 'require']

module.exports = {
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser', // 配置ts解析器
  parserOptions: {
    project: path.resolve(__dirname,'./tsconfig.json'),
    tsconfigRootDir: resolve('./'),
    sourceType: 'module'
  },
  // plugins: ['prettier'],
  rules: {
    'indent': ['error', 2],
    'no-unused-vars': 'error',
    'no-restricted-globals': ['error', ...DOMGlobals, ...NodeGlobals],
    'no-console': 'off',
    }
};

```



## 使用TS + Babel

> 安装

```bash
yarn add @babel/preset-typescript
```

> 配置

`babel.config.js`

```js
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
      },
      "@babel/preset-typescript",
    ],
  ],
}
```

## 打包Vue 组件

> 安装

```
yarn add rollup-plugin-vue 
yarn add eslint-plugin-vue  // eslint 相关

eslint-config-prettier
babel-eslint
```

### 使用eslint

> 安装

```
yarn add eslint
yarn add eslint-formatter-pretty
yarn add eslint-plugin-json
yarn add eslint-plugin-prettier
yarn add eslint-plugin-vue
yarn add @vue/eslint-config-prettier
yarn add babel-eslint
yarn add prettier
```

> 配置

`.eslintrc.js`

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true,
  },
  extends: [
    "plugin:json/recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/prettier",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error",
  },
};
```

`package.json`

```
{
"scripts": {
"lint": "eslint --no-error-on-unmatched-pattern --ext .vue --ext .js --ext .jsx packages/**/ src/**/ --fix",
 },
}
```



https://cloud.tencent.com/developer/article/1729333

https://segmentfault.com/a/1190000021695864
