import Section from "@components/Section"
import HomeCards from "@components/shared/HomeCards/HomeCards"
import Searchbar from "@components/shared/Searchbar"

function Home() {
	return (
		<Section>
			<div className="max-w-[40rem] mx-auto">
				<HomeCards />
				<h2 className="text-3xl uppercase text-center font-bold">Techwear outfits: Urban streetwear and Cyberpunk clothing</h2>
				<Searchbar />
			</div>
		</Section>
	)
}

export default Home