'use client'
import Container from "@components/Container";
import Section from "@components/Section";
import Image from "next/image";
import { useState } from "react";
import ItemCard from "./Item/ItemCard";

const Searchbar = () => {
	const [search, setSearch] = useState('');
	const [result, setResult] = useState(null);
	const [visibility, setVisibility] = useState('hidden');

	async function handleSearch() {
		if(!search) {
			console.log('Search field empty');
			setVisibility('hidden');
			return;
		};
	try {
		const response = await fetch(`/api/search/${search}`, {method: "GET"});
		const searchResult = await response.json();
		setResult(searchResult);
		setVisibility('');
	} catch (error) {
		console.log(error);
	}
  };

	return (
		<>
			<Container>
				<div className="flex gap-2 items-center text-black">
					<label htmlFor="search">
						<Image src="/assets/icons/search.svg" width={30} height={20} alt="Search" />
					</label>
					<input className="m-4 p-1.5 rounded-md w-full" type="text" placeholder="Search.." id="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
					<button onClick={handleSearch} className="bg-white p-1.5 w-16 rounded-xl">Go</button>
				</div>
			</Container>
			<Section>
				<div className={`${visibility} grid grid-cols-2 lg:grid-cols-3 gap-x-6 bg-slate-400/50 rounded-md pt-6 px-2 mb-6`}>
					{	
						result?.length > 0 && result.map((card) => {
							return (
								<ItemCard card={card} key={card._id}/>)
							})
					}
				</div>
			</Section>
		</>
	)
};

export default Searchbar;