import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <ul className="text-black text-l flex justify-end gap-6 px-6">   
        <li>
          <Link href="/">Home</Link>
        </li>   
        <li>
          <Link href="/collection/all">Collection</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>      
        </li> 
      </ul>
    </nav>
  )
}

export default Navbar