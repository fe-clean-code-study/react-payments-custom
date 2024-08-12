import React, { createContext, useContext, useMemo, useState } from 'react'
import { IRouterContextValue, IRouteType } from './type.ts'
import Route from './Route.tsx'
import extractParams from './extractParams.ts'

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
        data: Record<string, string>
      }> => React.isValidElement(child) && child.type === Route,
    )
    .map(({ props: { path, element, data = {} } }) => ({
      path,
      element,
      data,
    }))

  const [location, setLocation] = useState(window.location.pathname)
  const locationSegments = location
    .split('/')
    .map((segment) => `/${segment}`)
    .slice(1)

  const currentRoute = useMemo(
    () =>
      routes.find(
        ({ path }) =>
          path ===
            (locationSegments.length === depth
              ? '/'
              : locationSegments[depth]) || path.startsWith('/:'),
      ),
    [depth, locationSegments, routes],
  )

  const params: Record<string, string> = useMemo(() => {
    const nonParams = routes
      .map(({ path }) => path)
      .includes(locationSegments[depth])

    if (nonParams) {
      return {}
    }
    return routes.reduce(
      (params, { path }) => ({
        ...params,
        ...extractParams(path, locationSegments[depth]),
      }),
      {},
    )
  }, [depth, locationSegments, routes])

  return (
    <RouterContext.Provider
      value={{ routes, depth, location, setLocation, currentRoute, params }}
    >
      {children}
    </RouterContext.Provider>
  )
}
