import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,

} from "@/components/ui/alert-dialog"
import { useDeleteRoom } from "@/hooks/useDeleteRoom"
import { AlertTriangle, Trash2Icon } from "lucide-react"


type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  roomId: string
}


export function DeleteItem({ open, setOpen, roomId }: Props) {

  const { deleteRoom } = useDeleteRoom()

  const handIeDelete = () => {
    deleteRoom(roomId)
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>

      <AlertDialogContent size="sm" className="rounded-2xl!">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/15 rounded-2xl">
            <div className="p-3 rounded-xl bg-destructive/10">
              <Trash2Icon size={24} strokeWidth={1.5} />
            </div>
          </AlertDialogMedia>
          <AlertDialogTitle className="text-center text-lg">
            Rostan ham o&apos;chirmoqchmisiz?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-sm leading-relaxed">
            Agar ushbu xona o&apos;chirib yuborilsa, undagi barcha ma&apos;lumotlar yo&apos;qoladi va qayta tiklab bo&apos;lmaydi!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2 sm:gap-2">
          <AlertDialogCancel variant="outline" className="rounded-xl">Bekor qilish</AlertDialogCancel>
          <AlertDialogAction onClick={handIeDelete} variant="destructive" className="rounded-xl shadow-md shadow-destructive/20">
            <Trash2Icon size={15} />
            O&apos;chirish
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
