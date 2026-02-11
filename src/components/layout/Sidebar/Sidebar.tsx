import Menu from '@/components/common/Menu/Menu'
import { Gamepad, Gamepad2 } from 'lucide-react'

function Sidebar() {
  return (
    <div className="min-w-72 border-r-2 border px-1 py-4 bg-background text-foreground">
      <h1 className="font-bold text-2xl flex gap-2 items-center justify-center mb-4  ">
        <Gamepad2 size={38} /> Game Club
      </h1>
      <Menu />
    </div>
  )
}

export default Sidebar
