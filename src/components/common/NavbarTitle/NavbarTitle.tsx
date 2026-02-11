'use client'

import { usePathname } from 'next/navigation'

function NavbarTitle() {
  const pathname = usePathname()

  let title: string

  if (pathname.startsWith('/dashboard/rooms')) title = 'Xonalar'
  else title = 'Asosoiy'
  return (
    <h2 className=" font-bold text-2xl">{title}</h2>

  )
}

export default NavbarTitle
