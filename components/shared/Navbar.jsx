import Link from "next/link";


const Navbar = () => {
	return (
		<nav className="flex items-center justify-between">
			<ul className="text-darkOrange text-xl flex flex-col lg:flex-row justify-end gap-8 lg:px-6">   
				<li className="hover:text-lightBlue">
					<Link href="/">Home</Link>
				</li>   
				<li className="hover:text-lightBlue">
					<Link href="/collection/all">Collection</Link>
				</li>
				<li className="hover:text-lightBlue">
					<Link href="/blog">Blog</Link>      
				</li> 
			</ul>
		</nav>
	)
};

export default Navbar;