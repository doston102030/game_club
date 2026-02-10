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
import { Settings } from 'lucide-react'

function RoomsList() {
  const { rooms, loading } = useGetRoom()

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

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Nomi</TableHead>
            <TableHead>Statusi</TableHead>

            <TableHead>Narxi</TableHead>
            <TableHead className="text-right">Sozlama</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.map(room => (
            <TableRow key={room.name}>
              <TableCell className="font-medium ">{room.name}</TableCell>
              <TableCell>
                {room.isBusy ? (
                  <Badge variant={'error'}>Band</Badge>
                ) : (
                  <Badge variant={'success'}>Bo'sh</Badge>
                )}
              </TableCell>
              <TableCell>{room.price}so'm</TableCell>
              <TableCell className="flex justify-end cursor-pointer">
                <Settings />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default RoomsList
