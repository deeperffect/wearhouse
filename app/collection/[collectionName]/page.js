'use client'
import Section from "@components/Section";
import Items from "@components/shared/Item/Items";
import Searchbar from "@components/shared/Searchbar";
import Sidebar from "@components/shared/Sidebar/Sidebar";
import { useParams } from "next/navigation";
import { useState } from "react";
import { CheckboxesProvider } from "@app/contexts/CheckboxesContext";

const Collection = () => {
	const params = useParams();
	const [category, setCategory] = useState(params.collectionName);

	return (
		<>
			<CheckboxesProvider>
				<Sidebar />
				<Section>
					<h2 className="text-center font-bold text-3xl py-4">Collection</h2>
				</Section>
				<Searchbar />
				<Section>
					<h3 className="text-center text-2xl pb-4">All items</h3>
					<div className="grid grid-cols-3">
						<Items category={category}/>
					</div>
				</Section>
			</CheckboxesProvider>
		</>
	)
};

export default Collection;