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
				<div className="flex items-start">
					<aside className="sticky top-headerHeight h-pageHeight overflow-auto">
						<Sidebar />
					</aside>
					<Section>
						<Searchbar />
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
							<Items category={category}/>
						</div>
					</Section>
				</div>
			</CheckboxesProvider>
		</>
	)
};

export default Collection;