import { TRoom } from "@/components/common/RoomsModalForm/RoomsModalForm";
import { createRoom } from "@/firebase/firebase.Room";
import { toast } from "sonner";

export const useSetRooms = function () {
    const setRoom = async function (room: TRoom) {
        try {
            await createRoom(room)
            toast.success("Xona muvaffaqiyatli qo'shildi!", {
                description: `"${room.name}" xonasi yaratildi`
            })
        } catch (error) {
            toast.error("Xato yuz berdi!", {
                description: "Xona qo'shishda muammo bo'ldi. Qayta urinib ko'ring."
            })
        }
    }
    return { setRoom }
}