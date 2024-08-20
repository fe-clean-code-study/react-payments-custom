import { useContext, useEffect } from 'react'
import { RouterContext } from './Router.tsx'

const useRouter = () => {
  const routerContext = useContext(RouterContext)
  if (routerContext === null) {
    throw new Error('useRouter must be used in <Router>...</Router>')
  }

  const { location, setLocation, currentRoute, params } = routerContext

  useEffect(() => {
    const handlePopState = () => {
      setLocation(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [setLocation])

  const go = (path: string | -1) => {
    if (path === -1) {
      window.history.back()
    } else {
      window.history.pushState({}, '', path)
      setLocation(path)
    }
  }

  return {
    location,
    go,
    path: currentRoute?.path,
    data: currentRoute?.data,
    params,
  }
}

export default useRouter
