import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import {terser} from "rollup-plugin-terser";
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'


const input = "src/index.tsx";
const production = !process.env.ROLLUP_WATCH;


const watchDir = 'public';

const plugins = [
    replace({
        'process.env.NODE_ENV': JSON.stringify(
            production ? 'production' : 'development'
        )
    }),

    resolve({
        preferBuiltins: false,
        preserveSymlinks: true
    }),
    commonjs(),
    typescript({
        useTsconfigDeclarationDir: true,
    }),
    production && terser({
        toplevel: true,
        compress: {
            passes: 2
        }
    }),

    !production && serve({
        open: true,
        contentBase: watchDir,
    }),
    !production && livereload({watch: watchDir}),

];

const config = [];

if(production){
    config.push(
        {
            input,
            output: {
                file: pkg.module,
                format: "esm",
                sourcemap: true,
            },
            plugins,
        },
        {
            input,
            output: {
                file: pkg.main,
                format: "cjs",
                sourcemap: true,
            },
            plugins,
        }
    );
}
else{
    config.push(
        {
            input,
            output: {
                file: `${watchDir}/index.js`,
                format: "esm",
                sourcemap: true,
            },
            plugins,
        }
    );
}


export default config;