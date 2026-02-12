'use client'

import { usePathname } from 'next/navigation'

function NavbarTitle() {
  const pathname = usePathname()

  let title: string
  let subtitle: string

  if (pathname.startsWith('/dashboard/rooms')) {
    title = 'Xonalar'
    subtitle = 'Barcha xonalarni boshqaring'
  } else {
    title = 'Asosiy'
    subtitle = 'Umumiy ko\'rish paneli'
  }

  return (
    <div>
      <h2 className="font-bold text-xl tracking-tight">{title}</h2>
      <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
    </div>
  )
}

export default NavbarTitle
