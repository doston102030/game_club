"use client"

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Plus } from 'lucide-react'


import RoomsModalform from '../RoomsModalForm/RoomsModalForm'
import { useState } from 'react'

export function RoomsModal() {
  const [showModal, setShowModal] = useState(false)
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTrigger className="ml-auto" asChild>
        <Button className="gap-2 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200">
          <Plus size={18} strokeWidth={2.5} />
          <span>Xona qo&apos;shish</span>
        </Button>
      </DialogTrigger>

      <RoomsModalform setShowModal={setShowModal} />
    </Dialog>
  )
}
