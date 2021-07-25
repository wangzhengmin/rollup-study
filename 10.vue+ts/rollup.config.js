import { eslint } from 'rollup-plugin-eslint'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'

export default {
  input: './index.js',
  output: [
    {
      format: 'es',
      file: './es/index.js',
    },
    {
      format: 'cjs',
      file: './cjs/index.js',
    },
  ],
  plugins: [
    nodeResolve(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    commonjs(),
    eslint({
      include: ['src/**'],
    }),
  ],
}
