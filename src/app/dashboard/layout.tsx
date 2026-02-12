
import Navbar from '@/components/layout/Navbar/Navbar'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex bg-background text-foreground">
      <Sidebar />
      <div className="grow flex flex-col bg-background">
        <Navbar />
        <main className="grow px-6 py-6 overflow-y-auto bg-muted/20">
          {children}
        </main>
      </div>
    </div>
  )
}
