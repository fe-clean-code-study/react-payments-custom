import React from 'react'

type TRouterData = Record<string, string>

export interface IRouteType {
  path: string
  element: React.ReactNode
  data?: TRouterData
}

export interface IRouterContextValue {
  depth: number
  routes: IRouteType[]
  currentRoute?: IRouteType
  location: string
  setLocation: (value: string) => void
  params: Record<string, string>
}
