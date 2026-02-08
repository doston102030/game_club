import { TRoom } from "@/components/common/RoomsModalForm/RoomsModalForm";
import { createRoom } from "@/firebase/firebase.Room";

export const useSetRooms = function(){
    const setRoom = async function ( room:TRoom )  {
        await createRoom(room)
    }
    return { setRoom}
}