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
