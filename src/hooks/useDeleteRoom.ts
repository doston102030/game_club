
"use client"

import { deleteRoom as removeRoom } from "@/firebase/firebase.Room"

export const useDeleteRoom = () => {
 
const deleteRoom = async function(roomId:string){
    await removeRoom(roomId)

}

    return {deleteRoom };
}