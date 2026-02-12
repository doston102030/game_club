import Menu from '@/components/common/Menu/Menu'
import { Gamepad2 } from 'lucide-react'

function Sidebar() {
  return (
    <aside className="min-w-[280px] border-r border-border/40 px-5 py-6 bg-sidebar text-sidebar-foreground flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="relative flex gap-3 items-center px-3 mb-8">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25">
          <Gamepad2 size={24} strokeWidth={2.5} />
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-tight leading-tight">Game Club</h1>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mx-2 mb-6" />

      <Menu />
    </aside>
  )
}

export default Sidebar
