import Section from "@components/Section";
import LatestBlogs from "@components/shared/Blog/LatestBlogs";
import HomeCards from "@components/shared/HomeCards/HomeCards";
import LatestItems from "@components/shared/Item/LatestItems";

function Home() {
	return (
		<>
			<Section>
				<h2 className="p-4 text-3xl uppercase text-center font-bold">Techwear outfits: Urban streetwear and Cyberpunk clothing</h2>
				<div className="max-w-[45rem] mx-auto">
					<HomeCards/>
				</div>
			</Section>
			<Section>
				<h3 className="mt-4 text-xl font-bold p-4">Latest items</h3>
				<div className="grid grid-cols-2 lg:grid-cols-3">
					<LatestItems />
				</div>
			</Section>
			<Section>
				<h3 className="text-xl font-bold p-4">Latest blogs</h3>
				<div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
					<LatestBlogs />
				</div>
			</Section>
		</>
	
	)
};

export default Home;