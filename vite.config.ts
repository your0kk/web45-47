import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Конфигурация Vite: React Router отвечает за маршрутизацию и сборку,
// Tailwind CSS — за стили, tsconfigPaths — за короткие импорты через @/.
export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
