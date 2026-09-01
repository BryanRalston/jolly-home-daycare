import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent, NotFoundComponent } from "@/lib/error-component";
import { routerBasepath } from "@/lib/assets";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFoundComponent,
    basepath: routerBasepath(),
    scrollRestoration: true,
    defaultPreload: "intent",
  });
}
