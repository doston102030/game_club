import NavbarTitle from '@/components/layout/NavbarTitle/NavbarTitle'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <div className="grow flex flex-col">
        <NavbarTitle />
        <main className=" grow px-4 py-4   overflow-y-auto-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
