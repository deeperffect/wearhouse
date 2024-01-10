import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link className="w-[130px] h-auto" href="/">
          <img src="/assets/images/logo2.svg" alt="logo" />
      </Link>
      <ul className="text-black text-l flex justify-end gap-6 px-6">
        <Link href="/">Home</Link>
        <Link href="/collection">Collection</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </ul>
    </nav>
  )
}

export default Navbar