'use client'

import {
  ChartNoAxesCombined,
  DoorOpen,
  LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuItem {
  text: string
  href: string
  icon: LucideIcon
}

const menu: MenuItem[] = [
  {
    text: 'Asosiy',
    href: '/dashboard',
    icon: ChartNoAxesCombined,
  },
  {
    text: 'Xonalar',
    href: '/dashboard/rooms',
    icon: DoorOpen,
  },
]

function Menu() {
  const pathname = usePathname()

  return (
    <div className="relative">

      <nav>
        <ul className="flex flex-col gap-1.5 px-1">
          {menu.map(menuItem => {
            const Icon = menuItem.icon
            const isActive = pathname === menuItem.href
            return (
              <li key={menuItem.href}>
                <Link href={menuItem.href}>
                  <div
                    className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 ${isActive
                      ? 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg shadow-primary/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                      }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary-foreground/80 rounded-r-full" />
                    )}
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className={isActive ? '' : 'group-hover:scale-110 transition-transform duration-200'} />
                    <span>{menuItem.text}</span>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-foreground/80 animate-pulse" />
                    )}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
