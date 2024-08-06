import React, { createContext, useContext, useMemo, useState } from 'react'
import { IRouterContextValue, IRouteType } from './type.ts'
import Route from './Route.tsx'

export const RouterContext = createContext<IRouterContextValue | null>(null)

interface IRouterProviderProps {
  children: React.ReactNode
}

export const Router = ({ children }: IRouterProviderProps) => {
  const parentRouteContext = useContext(RouterContext)

  const depth = parentRouteContext === null ? 0 : parentRouteContext.depth + 1

  const routes: IRouteType[] = React.Children.toArray(children)
    .filter(
      (
        child,
      ): child is React.ReactElement<{
        path: string
        element: React.ReactNode
      }> => React.isValidElement(child) && child.type === Route,
    )
    .map(({ props: { path, element, ...data } }) => ({
      path,
      element,
      data,
    }))

  const [location, setLocation] = useState(window.location.pathname)

  const currentRoute = useMemo(
    () =>
      routes.find(({ path }) => {
        const locationSegments = location
          .split('/')
          .map((segment) => `/${segment}`)
          .slice(1)

        return (
          path ===
          (locationSegments.length === depth ? '/' : locationSegments[depth])
        )
      }),
    [depth, location, routes],
  )

  return (
    <RouterContext.Provider
      value={{ routes, depth, location, setLocation, currentRoute }}
    >
      {children}
    </RouterContext.Provider>
  )
}
