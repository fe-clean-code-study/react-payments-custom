import {useContext, useEffect, useState} from "react";
import { RouterContext } from "./RouterProvider.tsx";

const useRouter = () => {
  const routerContext = useContext(RouterContext)
  if (routerContext === null) {
    throw new Error('useRouter must be used in <RouterProvider>...</RouterProvider>')
  }

  const { routes, depth } = routerContext

  const [location, setLocation] = useState(window.location.pathname);


  const currentRoute = routes.find(({ path }) => {
    const locationSegments = location
      .split('/')
      .map(segment => `/${segment}`)
      .slice(1)

    if (locationSegments.length === depth && path === '/')  {
      return true
    }
    return locationSegments[depth] === path
  })


  useEffect(() => {
    const handlePopState = () => {
      setLocation(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const go = (path: string | -1) => {
    if (path === -1){
      window.history.back();
    }else{
      window.history.pushState({}, '', path);
      setLocation(path);
    }
  }

  return { location, go, ...currentRoute }
}

export default useRouter