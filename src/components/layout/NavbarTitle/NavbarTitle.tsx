'use client'

import { log } from 'console'
import { usePathname } from 'next/navigation'

function NavbarTitle() {
  const pathname = usePathname()

  let title: string

  if (pathname.startsWith('/ dashboard/rooms')) title = 'Xonalar'
  else title = 'Asosoiy'
  return (
    <header className="border-b shadow-sm px-4 py-8    ">
      <h2 className=" font-bold text-2xl">{title}</h2>
    </header>
  )
}

export default NavbarTitle
