import Section from "@components/Section";
import LatestBlogs from "@components/shared/Blog/LatestBlogs";
import HomeCards from "@components/shared/HomeCards/HomeCards";
import LatestItems from "@components/shared/Item/LatestItems";
import Link from "next/link";

function Home() {
	return (
		<>
			<div className=" bg-white/50">
				<Section>
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2 p-8">
						<HomeCards className="max-h-[70vh] object-contain object-center lg:max-h-[50vh]"/>
						<div className="flex flex-col justify-center gap-8">
							<h1 className="font-bold text-3xl lg:text-5xl">Welcome to SecondStreet Wearhouse - your ultimate hub for techwear fashion!</h1>
							<p className="text-md lg:text-2xl">Explore, buy, sell, and share your tech-inspired style with enthusiasts worldwide. Dive into curated collections, discover trends, and connect with like-minded individuals. Join us and redefine your style journey at SecondStreet Wearhouse.</p>
							<Link className="w-fit p-4 bg-blue-400 rounded-3xl text-white hover:text-lightOrange" href="/register">Get Started
							</Link>
						</div>
					</div>
							
				</Section>
			</div>
			<div className="bg-slate-200/50">
				<Section>
					<h3 className="text-xl font-bold py-4">Latest items</h3>
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
						<LatestItems />
					</div>
				</Section>
			</div>
			<div className=" bg-white/50">
				<Section>
					<h3 className="text-xl font-bold py-4">Latest blogs</h3>
					<div className="grid grid-cols-2 gap-8 lg:grid-cols-3 pb-4">
						<LatestBlogs />
					</div>
				</Section>
			</div>
		</>
	
	)
};

export default Home;