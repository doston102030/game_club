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
import { DoorOpen } from 'lucide-react'

function RoomsList() {
  const [showModal, setShowModal] = useState(false)
  const { rooms, loading } = useGetRoom()
  const [roomId, setRoomId] = useState("")


  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Spinner />
      </div>
    )
  }

  if (!rooms.length) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl" />
          <div className="relative p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 mb-5">
            <DoorOpen size={36} className="text-primary" strokeWidth={1.5} />
          </div>
        </div>
        <p className="text-lg font-semibold text-foreground mt-2">
          Hozircha xonalar mavjud emas
        </p>
        <p className="text-sm text-muted-foreground mt-1 max-w-[260px]">
          Yangi xona qo&apos;shish uchun yuqoridagi &quot;Xona qo&apos;shish&quot; tugmasini bosing
        </p>
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

      <div className="rounded-2xl border border-border/50 bg-card overflow-hidden shadow-sm shadow-primary/5">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40 hover:bg-muted/40 border-b border-border/50">
              <TableHead className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Nomi</TableHead>
              <TableHead className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Statusi</TableHead>
              <TableHead className="text-end font-semibold text-xs uppercase tracking-wider text-muted-foreground">Narxi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rooms.map((room, index) => (
              <TableRow
                onClick={() => handeleClick(room.id)}
                key={room.id}
                className="select-none cursor-pointer transition-all duration-150 hover:bg-accent/40 group"
              >
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary text-xs font-bold border border-primary/10">
                      {index + 1}
                    </div>
                    <span className="group-hover:text-primary transition-colors duration-200">{room.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {room.isBusy ? (
                    <Badge variant={'error'} className="shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse mr-1" />
                      Band
                    </Badge>
                  ) : (
                    <Badge variant={'success'} className="shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80 mr-1" />
                      Bo&apos;sh
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-end">
                  <span className="font-semibold text-foreground">{room.price.toLocaleString()}</span>
                  <span className="text-muted-foreground text-xs ml-1">so&apos;m</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default RoomsList
