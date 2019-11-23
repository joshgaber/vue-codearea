import commonjs from "rollup-plugin-commonjs"; // Convert CommonJS modules to ES6
import vue from "rollup-plugin-vue"; // Handle .vue SFC files
import buble from "rollup-plugin-buble"; // Transpile/polyfill with reasonable browser support
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/app.js", // Path relative to package.json
  output: [
    {
      file: "dist/component.umd.js",
      format: "umd",
      name: "VCodearea",
      exports: "named",
      globals: {
        'vue-runtime-helpers': 'VueRuntimeHelpers'
      }
    },
    {
      file: "dist/component.esm.js",
      format: "esm"
    },
    {
      file: "dist/component.min.js",
      format: "iife",
      name: "VCodearea",
      exports: "named",
      globals: {
        'vue-runtime-helpers': 'VueRuntimeHelpers'
      }
    },
  ],
  plugins: [
    commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true // Explicitly convert template to render function
    }),
    buble(), // Transpile to ES5
    process.env.NODE_ENV === "production" && terser()
  ],
  external: ["vue-runtime-helpers"]
};
