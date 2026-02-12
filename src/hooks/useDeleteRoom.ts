
"use client"

import { deleteRoom as removeRoom } from "@/firebase/firebase.Room"
import { toast } from "sonner"

export const useDeleteRoom = () => {

    const deleteRoom = async function (roomId: string) {
        try {
            await removeRoom(roomId)
            toast.success("Xona muvaffaqiyatli o'chirildi!", {
                description: "Xona ro'yxatdan olib tashlandi"
            })
        } catch (error) {
            toast.error("Xato yuz berdi!", {
                description: "Xonani o'chirishda muammo bo'ldi. Qayta urinib ko'ring."
            })
        }
    }

    return { deleteRoom };
}