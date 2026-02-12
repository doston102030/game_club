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
import { Trash2Icon } from "lucide-react"
import { TiUserDelete } from "react-icons/ti"



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
    <AlertDialog open={open} onOpenChange={setOpen}
    >

      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Rostan ham ochirmoqchmisiz?</AlertDialogTitle>
          <AlertDialogDescription>
            Agar ushbu element o'chrib yuborilsa, uni qayta tiklab bo'masligi mumkin!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Bekor qilish</AlertDialogCancel>
          <AlertDialogAction onClick={handIeDelete} variant="destructive">O'chrish</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
