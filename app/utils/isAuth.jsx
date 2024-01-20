"use client"
import { AuthContext } from "@app/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react"



export default function isAuth(Component) {
  return function IsAuth(props) {
    const { user } = useContext(AuthContext)
    const router = useRouter()


    useEffect(() => {
      if (!user) {
        return router.push("/")
      }
    }, [])


    if (!user) {
      return null
    }

    return <Component {...props}/>
  }
}