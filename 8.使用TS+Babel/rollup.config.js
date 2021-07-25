import nodeResolve from "rollup-plugin-node-resolve";
import typescript from 'rollup-plugin-typescript2';
import babel from "rollup-plugin-babel";
import path from 'path';

export default {
  input: './src/main.ts',
  output: {
    file: './dist/index.js',
    format: 'umd',
    name: 'MyBundle'
  },
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: path.resolve(__dirname,'./tsconfig.json'),
      exclude: "node_modules/**",
      typescript: require("typescript"),
    }),
    babel({
      exclude: "node_modules/**",
      extensions: ['.js', '.ts']
    })
  ]
};
