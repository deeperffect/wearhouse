'use client'
import { useAuth } from "@app/contexts/AuthContext"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  const { user } = useAuth()
  console.log(user)
  return (
    <nav className="flex items-center justify-between">
      <Link className="w-[130px] h-auto" href="/">
          <Image src="/assets/images/logo2.svg" alt="logo" width={96} height={32} />
      </Link>
      <ul className="text-black text-l flex justify-end gap-6 px-6">
        {user ? (
          <> 
            <Link href="/">Home</Link>
            <Link href="/collection">Collection</Link>
            <Link href="/create-listing">Create listing</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/logout">Logout</Link>
          </>
        ):(
          <>
           <Link href="/register">Register</Link>
           <Link href="/login">Login</Link>
          </>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar