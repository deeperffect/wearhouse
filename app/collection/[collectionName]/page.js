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
			<Section>
				<CheckboxesProvider>
					<div className="flex bg-white/50">
						<aside>
							<Sidebar />
						</aside>
						<div className="bg-slate-200/50 rounded-md mx-auto">
								<Searchbar />
							<Section>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
									<Items category={category}/>
								</div>
							</Section>
						</div>
					</div>
				</CheckboxesProvider>
			</Section>
		</>
	)
};

export default Collection;