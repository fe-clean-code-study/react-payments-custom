import { useContext, useEffect } from 'react'
import { RouterContext } from './Router.tsx'

const useRouter = () => {
  const routerContext = useContext(RouterContext)
  if (routerContext === null) {
    throw new Error('useRouter must be used in <Router>...</Router>')
  }

  const { location, setLocation, currentRoute } = routerContext

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

  console.log(currentRoute)
  return { location, go, path: currentRoute?.path, data: currentRoute?.data }
}

export default useRouter