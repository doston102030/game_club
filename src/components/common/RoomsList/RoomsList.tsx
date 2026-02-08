"use client"
import { Spinner } from '@/components/ui/spinner'
import { useGetRoom } from '@/hooks/useGetRooms'


function RoomsList() {
  const { rooms, loading } = useGetRoom()

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Spinner />
      </div>
    )
  }

  if (!rooms.length) {
    return (
      <p className="text-xl font-bold text-center text-muted-foreground">
        Hozircha xonalar mavjud emas!
      </p>
    )
  }


  return (
    <div className="flex flex-col gap-4">
      {rooms.map((room) => (
        <div key={room.name} className="p-4 border rounded shadow-sm flex justify-between items-center">
          <div>
            <h3 className="font-bold">{room.name}</h3>
            <p className="text-sm text-gray-500">{room.price} UZS</p>
          </div>
          <span className={`px-2 py-1 rounded text-xs ${room.isBusy ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
            {room.isBusy ? 'Band' : 'Bo\'sh'}
          </span>
        </div>
      ))}
    </div>
  )
}

export default RoomsList