import React, { Children, ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" w-full  h-full flex items-center justify-center bg-amber-800 ">
      {children}
    </div>
  )
}
