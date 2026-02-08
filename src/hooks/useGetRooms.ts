
"use client"

import { getRoom } from "@/firebase/firebase.Room"
import { FullRoomType } from "@/types/types"
import { useEffect, useState } from "react"





export const useGetRoom = ()=>{
    const [rooms , setRooms]= useState<FullRoomType[]>([])
    const [loading, setLoading]= useState(false)



    useEffect(()=> {
        const fullData =  getRoom((data)=>{
            setRooms(data)
            setLoading(false)
        })

     return  ()=> fullData()
    },[])

    return {rooms , loading};
}