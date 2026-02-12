'use client'
import { Spinner } from '@/components/ui/spinner'
import { useGetRoom } from '@/hooks/useGetRooms'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { RoomsCommand } from '../RoomsCommond/RoomsCommand'

function RoomsList() {
  const [showModal, setShowModal] = useState(false)
  const { rooms, loading } = useGetRoom()
  const [roomId, setRoomId] = useState("")


  if (!rooms.length) {
    return (
      <p className="text-xl font-bold text-center text-muted-foreground">
        Hozircha xonalar mavjud emas!
      </p>
    )
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Spinner />
      </div>
    )
  }
  const handeleClick = (roomId: string) => {
    setShowModal(true);
    setRoomId(roomId);
  };


  return (
    <div>
      <RoomsCommand roomId={roomId} open={showModal} setOpen={setShowModal} />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Nomi</TableHead>
            <TableHead>Statusi</TableHead>

            <TableHead className='text-end'>Narxi</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.map(room => (

            <TableRow onClick={() => handeleClick(room.id)} key={room.id} className='select-none cursor-pointer'>
              <TableCell className="font-medium ">{room.name}</TableCell>
              <TableCell>
                {room.isBusy ? (
                  <Badge variant={'error'}>Band</Badge>
                ) : (
                  <Badge variant={'success'}>Bo'sh</Badge>
                )}
              </TableCell>
              <TableCell className='text-end'>{room.price}so'm</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default RoomsList
