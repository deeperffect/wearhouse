import Section from "@components/Section";
import LatestBlogs from "@components/shared/Blog/LatestBlogs";
import HomeCards from "@components/shared/HomeCards/HomeCards";
import LatestItems from "@components/shared/Item/LatestItems";

function Home() {
	return (
		<>
			<div className=" bg-white/50">
				<Section>
					<h2 className="p-4 text-3xl uppercase text-center font-bold">Techwear outfits: Urban streetwear and Cyberpunk clothing</h2>
					<div className="sm:grid grid-cols-2 gap-20">
						<HomeCards/>
						<div className="hidden sm:block text-center">
							<h3 className=" text-6xl mb-6">Welcome to SecondStreet Wearhouse - your ultimate hub for techwear fashion!</h3>
							<p className="hidden md:block text-2xl">Explore, buy, sell, and share your tech-inspired style with enthusiasts worldwide. Dive into curated collections, discover trends, and connect with like-minded individuals. Join us and redefine your style journey at SecondStreet Wearhouse.</p>
						</div>
					</div>
				</Section>
			</div>
			<div className="bg-slate-200/50">
				<Section>
					<h3 className="text-xl font-bold py-4">Latest items</h3>
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
						<LatestItems />
					</div>
				</Section>
			</div>
			<div className=" bg-white/50">
				<Section>
					<h3 className="text-xl font-bold py-4">Latest blogs</h3>
					<div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
						<LatestBlogs />
					</div>
				</Section>
			</div>
		</>
	
	)
};

export default Home;