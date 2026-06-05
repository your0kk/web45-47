import type { RouteConfig } from "@react-router/dev";
import { index, route } from "@react-router/dev/routes";

// Route definitions for the restaurant application.  Each route
// corresponds to a separate page component.  The array is typed to
// satisfy RouteConfig to enable static type checking of the routes.
export default [
  index({ element: () => import("./home") }),
  route({ path: "menu", element: () => import("./menu") }),
  route({ path: "cart", element: () => import("./cart") }),
  route({ path: "checkout", element: () => import("./checkout") }),
  route({ path: "about", element: () => import("./about") })
] satisfies RouteConfig;