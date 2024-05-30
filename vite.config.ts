import { vitePluginForArco } from "@arco-plugins/vite-vue";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import UnpluginSvgComponent from "unplugin-svg-component/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    middlewareMode: true,
    proxy: {
      "/admin": {
        target: "http://localhost:5177",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      resolvers: [ArcoResolver()],
      eslintrc: {
        enabled: true,
        filepath: ".eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      dts: "./types/auto-imports.d.ts",
    }),
    Components({
      dirs: ["src/components"],
      resolvers: [ArcoResolver()],
      extensions: ["vue", "jsx"],
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      dts: "./types/components.d.ts",
    }),
    UnpluginSvgComponent({
      dts: true,
      dtsDir: "./types",
      iconDir: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolIdFormatter(name) {
        return name.slice(0, -4);
      },
      preserveColor: /color/,
      scanStrategy: "text",
    }),
    vitePluginForArco({
      style: "css",
    }),
  ],
});
