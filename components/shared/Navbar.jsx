'use client'
import { AuthContext } from "@app/contexts/AuthContext"
import Link from "next/link"
import { useContext } from "react"

const Navbar = () => {
  const { user } = useContext(AuthContext)
  return (
    <nav className="flex items-center justify-between">
      <ul className="text-black text-l flex justify-end gap-6 px-6">       
        <Link href="/">Home</Link>
        <Link href="/collection">Collection</Link>
        <Link href="/blog">Blog</Link>      
        {user && <Link href="/create-listing">Create listing</Link>}
      </ul>
    </nav>
  )
}

export default Navbar