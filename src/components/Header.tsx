import { useRouter } from '../libs/router'
import React from 'react'

export default function Header({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { data } = useRouter()

  const pageTitle = data?.title
  if (!pageTitle) return null

  return <div {...props}>{pageTitle}</div>
}
