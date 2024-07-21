import {useRouter} from "../libs/router";

export default function Header () {
  const { data : { title } } = useRouter()

  return <div>{ title }</div>
}