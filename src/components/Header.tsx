import {useRouter} from "../libs/router";
import React from "react";

export default function Header ({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { data : { title } } = useRouter()

  if (!title) return null

  return <div {...props}>{ title }</div>
}