"use client"

import { Field, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import InputError from '../InputError/InputError'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Dispatch, SetStateAction } from 'react'

const roomSchema = z.object({
    name: z.string().min(2,"Xona nomi kamida ikkita harf bo'lishi kerek!").max(20, "Xona nomi 20 harfdan kam  bo'lsin"),
    price: z.number().min(5000, "Kamida 5000 so'm bo'lishi kerek").max(100000, "Narxni xato kiritdingiz!")

})

type Props = {
  setShowModal: Dispatch<SetStateAction <boolean>>
}

function RoomsModalForm( {setShowModal}:Props) {
    const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TRoom>({
    resolver: zodResolver(roomSchema),
  })
  
type TRoom = z.infer<typeof roomSchema>

  const onsunbit = (room: TRoom) => {
    console.log(room)
    
    reset()
    setShowModal(false)
  }

  return (
   <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(onsunbit)} className="flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle>Yangi xona yaratish</DialogTitle>
            <DialogDescription>
              Ma'lumotlarni e'tibor bilan kriting!
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field className="gap-1">
              <Label htmlFor="name-1">Xonaning nomi</Label>
              <Input
                id="name-1"
                placeholder="Masalan: 1-xona"
                {...register('name')}
              />
              {errors.name && <InputError massage = {errors.name.message} /> }
            </Field>
            <Field className="gap-1">
              <Label htmlFor="price-1">Xonaning narxi</Label>
              <Input
                type="number"
                id="price-1"
                placeholder="Masalan: 10000"
                {...register('price', { valueAsNumber: true })}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Bekor qilish</Button>
            </DialogClose>
            <Button type="submit">Qo'shish</Button>
          </DialogFooter>
        </form>
      </DialogContent>
  )
}

export default RoomsModalForm