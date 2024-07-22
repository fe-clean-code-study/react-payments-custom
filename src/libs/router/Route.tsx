import { TRouteProps } from "./type.ts";
import {useContext} from "react";
import {RouterContext} from "./Router.tsx";

export default function Route({ path, element }: TRouteProps) {
  const { currentRoute } = useContext(RouterContext)

  if (path === currentRoute.path) {
    return element
  }else {
    return null
  }
}