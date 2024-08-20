import {useEffect} from "react";
import {useRouter} from "../libs/router";

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.go('/payments')
  }, [router]);

  return null
}