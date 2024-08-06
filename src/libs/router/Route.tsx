import { TRouteProps } from './type.ts'
import { useContext } from 'react'
import { RouterContext } from './Router.tsx'

export default function Route({ path, element }: TRouteProps) {
  const routerContext = useContext(RouterContext)
  if (!routerContext) {
    throw new Error('RouterContext must be provided')
  }

  const { currentRoute } = routerContext

  if (path === currentRoute?.path) {
    return element
  } else {
    return null
  }
}
