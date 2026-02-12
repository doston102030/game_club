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
import {
  Edit,
  TimerIcon,
  Trash2,

} from 'lucide-react'

type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function RoomsCommand({ open, setOpen }: Props) {


  return (
    <div className="flex flex-col gap-4">

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandList>
          <CommandEmpty>Natija topilmadi!</CommandEmpty>
          <CommandGroup heading="Sessiya">
            <CommandItem>
              <TimerIcon />
              <span>Sessiya boshlash</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Sozlamalar" >
            <CommandItem>
              <Edit />
              <span>Xonani tahrirlash</span>
            </CommandItem>
            <CommandItem className='text-red-800  bg-red-200  hover:bg-red-300! hover:text-red-800!'>
              <Trash2 className='text-red-800' />
              <span>Xonani o'chirish</span>
            </CommandItem>
            <CommandItem></CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}
