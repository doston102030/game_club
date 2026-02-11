'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  Edit,
  SettingsIcon,
  SmileIcon,
  TimerIcon,
  Trash2,
  UserIcon,
} from 'lucide-react'

export function RoomsCommand() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
        Open Menu
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
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
              <CommandItem>
                <Trash2 />
                <span>Xonani o'chirish</span>
              </CommandItem>
              <CommandItem></CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
