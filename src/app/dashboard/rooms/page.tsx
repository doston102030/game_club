

import { RoomsCommand } from '@/components/common/RoomsCommond/RoomsCommand'
import RoomsList from '@/components/common/RoomsList/RoomsList'
import { RoomsModal } from '@/components/common/RoomsModal/RoomsModal'


function Rooms() {

  return (
    <div className="h-full flex flex-col gap-10">
      <div className="  w-full  flex items-center">
        <RoomsModal />
      </div>

      <RoomsList/>
      <RoomsCommand/>
    </div>
  )
}

export default Rooms
