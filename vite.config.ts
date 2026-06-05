import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { routerPlugin } from "@react-router/dev/plugin-vite";
import tailwindcss from "@tailwindcss/vite";

// Vite configuration for the restaurant app.  This file wires up the
// React plugin, the React Router plugin (to enable the router CLI
// integration) and the Tailwind CSS plugin.  It exports a default
// configuration object used by Vite during development and build
// processes.
export default defineConfig({
  plugins: [react(), routerPlugin(), tailwindcss()]  
});