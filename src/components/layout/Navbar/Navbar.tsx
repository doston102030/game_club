import NavbarTitle from '@/components/common/NavbarTitle/NavbarTitle'
import { ThemeControll } from '@/components/common/ThameController/ThameController'

function Navbar() {
  return (
    <header className="border-b border-border/40 bg-background/80 backdrop-blur-xl px-8 py-4 flex items-center justify-between sticky top-0 z-10">
      <NavbarTitle />
      <div className="flex items-center gap-3">
        <ThemeControll />
      </div>
    </header>
  )
}

export default Navbar
