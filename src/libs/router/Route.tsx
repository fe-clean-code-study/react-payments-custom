import { IRouteProps } from "./type.ts";
import useRouter from "./useRouter.ts";

export default function Route({ path, element }: IRouteProps) {
  const router = useRouter()

  if (path === router.path) {
    return element
  }else {
    return null
  }
}