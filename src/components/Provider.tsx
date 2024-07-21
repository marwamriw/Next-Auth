"use client"
import { SessionProvider } from "next-auth/react"

interface IProvider{
    children:React.ReactNode,
    session:any
}

export default function Provider({ children, session }:IProvider){
    return(
                <SessionProvider session={session}>
                    {children}
                </SessionProvider>
    )
}