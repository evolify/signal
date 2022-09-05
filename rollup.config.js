import { defineConfig } from "rollup"
import esbuild from "rollup-plugin-esbuild"
import dts from "rollup-plugin-dts"
const name = require("./package.json").main.replace(/\.js$/, "")

export default defineConfig([
  {
    input: "src/index.ts",
    plugins: [esbuild()],
    output: [
      {
        file: `${name}.js`,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: "es",
        sourcemap: true,
      },
    ],
  },
  {
    input: "src/index.ts",
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: "es",
    },
  },
])
