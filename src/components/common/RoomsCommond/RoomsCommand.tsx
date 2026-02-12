'use client'

import * as React from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { Edit, Play, Trash2 } from 'lucide-react'
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

      <CommandDialog className="max-w-[380px] rounded-2xl! overflow-hidden border-border/50" open={open} onOpenChange={setOpen}>
        <CommandList className="p-2">
          <CommandEmpty className="py-8 text-center text-sm text-muted-foreground">
            Natija topilmadi!
          </CommandEmpty>

          <CommandGroup heading="Sessiya" className="[&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted-foreground/60 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2">
            <CommandItem className="gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-150 data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                <Play size={14} strokeWidth={2.5} />
              </div>
              <span className="font-medium text-sm">Sessiya boshlash</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator className="my-2 bg-border/50" />

          <CommandGroup heading="Sozlamalar" className="[&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted-foreground/60 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2">
            <CommandItem className="gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-150 data-[selected=true]:bg-accent">
              <div className="p-1.5 rounded-lg bg-accent text-accent-foreground">
                <Edit size={14} strokeWidth={2} />
              </div>
              <span className="font-medium text-sm">Xonani tahrirlash</span>
            </CommandItem>
            <CommandItem
              onSelect={handeleClick}
              className="gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-150 data-[selected=true]:bg-destructive/10 data-[selected=true]:text-destructive mt-1"
            >
              <div className="p-1.5 rounded-lg bg-destructive/10 text-destructive">
                <Trash2 size={14} strokeWidth={2} />
              </div>
              <span className="font-medium text-sm">Xonani o&apos;chirish</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}
