import React from 'react'

type TRouterData = Record<string, string>

export interface IRouteType {
  path: string
  element: React.ReactNode
  data: TRouterData
}

export type TRouteProps = Omit<IRouteType, 'data'> & TRouterData

export interface IRouterContextValue {
  depth: number
  routes: IRouteType[]
  currentRoute?: IRouteType
  location: string
  setLocation: (value: string) => void
}
