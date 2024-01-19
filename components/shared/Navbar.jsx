import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <ul className="text-black text-l flex justify-end gap-6 px-6">       
        <Link href="/">Home</Link>
        <Link href="/collection">Collection</Link>
        <Link href="/blog">Blog</Link>      
      </ul>
    </nav>
  )
}

export default Navbar