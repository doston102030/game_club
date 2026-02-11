import NavbarTitle from '@/components/common/NavbarTitle/NavbarTitle'
import { ThemeControll } from '@/components/common/ThameController/ThameController'

function Navbar() {
  return (
    <header className="border-b shadow-sm px-8 py-8 flex items-center justify-between ">
      <NavbarTitle />
      <ThemeControll />
    </header>
  )
}

export default Navbar
