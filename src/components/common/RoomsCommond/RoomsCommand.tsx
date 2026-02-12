'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { Edit, TimerIcon, Trash2 } from 'lucide-react'
import { DeleteItem } from '../DeleteItem/DeleteItem'

type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  roomId: string
}

export function RoomsCommand({ open, setOpen, roomId }: Props) {
  const [showDlateModal, setShowDlateModal] = React.useState(false)
  const handeleClick = () => {
    setShowDlateModal(true)
    setOpen(false)
  }

  return (
    <div className="flex flex-col gap-4">
      <DeleteItem roomId={roomId} open={showDlateModal} setOpen={setShowDlateModal} />

      <CommandDialog className="w-96" open={open} onOpenChange={setOpen}>
        <CommandList>
          <CommandEmpty>Natija topilmadi!</CommandEmpty>
          <CommandGroup heading="Sessiya">
            <CommandItem>
              <TimerIcon />
              <span>Sessiya boshlash</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Sozlamalar">
            <CommandItem>
              <Edit />
              <span>Xonani tahrirlash</span>
            </CommandItem>
            <CommandItem
              onSelect={handeleClick}
              className="text-red-800  bg-red-300!  hover:bg-red-400! hover:text-red-800!"
            >
              <Trash2 className="text-red-800" />
              <span>Xonani o'chirish</span>
            </CommandItem>
            <CommandItem></CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}
