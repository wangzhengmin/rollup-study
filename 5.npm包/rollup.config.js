import { eslint } from "rollup-plugin-eslint";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
  input: './src/main.js',
  output: {
    file: './dist/index.js',
    format: 'umd',
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