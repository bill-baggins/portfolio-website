import { defineConfig } from "vite";

export default defineConfig( ({ command, mode }) => {
    /**@type {import("vite").UserConfig} */
    const common = {
        build: {
            minify: true,
            outDir: "../server/embed/public"
        }
    }
    if (command === "serve") {
        return {
            ...common,
        }
    } else {
        return {
            ...common,
            server: {
                origin: "http://localhost:8080",
            }
        }
    }
})