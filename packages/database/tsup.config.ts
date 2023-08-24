import { defineConfig } from "tsup"

export default defineConfig({
  dts: true,
  clean: true,
  format: ["cjs", "esm"],
  entry: ["./src/index.ts"],
  minify: process.env.NODE_ENV === "production",
  sourcemap: true
})
