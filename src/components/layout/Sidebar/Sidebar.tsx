import Menu from '@/components/common/Menu/Menu'
import { Gamepad } from 'lucide-react'

function Sidebar() {
  return (
    <div className="min-w-72   border-r-2  border-red-600  px-1 py-4 ">
      <h1 className="font-bold text-2xl flex gap-1 items-center justify-center mb-4  ">
        <Gamepad size={40} /> Game Club
      </h1>
      <Menu />
    </div>
  )
}

export default Sidebar
