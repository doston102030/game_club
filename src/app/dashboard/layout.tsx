
import Navbar from '@/components/layout/Navbar/Navbar'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex bg-background text-foreground">
      <Sidebar />
      <div className="grow flex flex-col bg-background">
        <Navbar />
        <main className=" grow px-4 py-4   overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
