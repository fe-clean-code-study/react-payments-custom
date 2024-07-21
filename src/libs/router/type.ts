import React from "react";

type TRouterData = Record<string, string>

export interface IRouteProps extends TRouterData{
  path: `/${string}`
  element: React.ReactNode
}

export type TRouteType = Omit<IRouteProps, 'element'>

export interface IRouterContextValue {
  depth: number
  routes: TRouteType[]
}