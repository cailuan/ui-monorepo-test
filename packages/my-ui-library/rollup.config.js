import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.ts',  // 入口文件
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs', // CommonJS 格式
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ES Module 格式
      sourcemap: true,
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    terser() // 代码压缩
  ],
  external: ['react', 'react-dom'] // 将 react 和 react-dom 作为外部依赖
};