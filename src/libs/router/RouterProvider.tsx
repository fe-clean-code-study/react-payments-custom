import React, {createContext, useContext} from "react";
import { IRouterContextValue, TRouteType } from "./type.ts";
import Route from "./Route.tsx";

export const RouterContext = createContext<IRouterContextValue | null>(null)

interface IRouterProviderProps {
  children: React.ReactNode
}

export default function RouterProvider({ children }: IRouterProviderProps) {
  const parentRouteContext = useContext(RouterContext)

  const depth = parentRouteContext === null ? 0 : parentRouteContext.depth + 1

  const routes: TRouteType[] = React.Children.toArray(children)
    .filter(({ type }) => type === Route)
    .map(({ props: { path, element, ...data } }) => ({ path, data }))


  return (
    <RouterContext.Provider value={{ routes, depth }}>
      {children}
    </RouterContext.Provider>
  )
}