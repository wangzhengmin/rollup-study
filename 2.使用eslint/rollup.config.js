import resolve from 'rollup-plugin-node-resolve';
import { eslint } from "rollup-plugin-eslint";

export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'MyBundle'
  },
  plugins: [
    resolve(),
    eslint({
      include: ["src/**"],
    }),
  ]
};