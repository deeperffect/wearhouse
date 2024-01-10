import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
          <Image src="/assets/images/logo2.svg" alt="logo" width={100} height={36} />
      </Link>
      <ul className="text-black text-l flex justify-end gap-6 px-6">
        <Link href="/">Home</Link>
        <Link href="/collection">Collection</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </ul>
    </nav>
  )
}

export default Navbar