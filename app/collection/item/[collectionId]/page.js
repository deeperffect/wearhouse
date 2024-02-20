'use client'
import Section from "@components/Section";
import ItemDetails from "@components/shared/Item/ItemDetails";
import Loader from "@components/shared/Loader";
import { Suspense, useEffect, useState } from "react";

const collectionId = ({ params }) => {
	const [item, setItem] = useState({});

		useEffect(() => {
			async function fetchItem() {
				const response = await fetch(`/api/collection/item/${params.collectionId}`, {method: "GET"});
				const itemFound = await response.json();
				setItem(itemFound);
			};
		fetchItem();
		}, []);

	return (
		<div className="bg-white/50 h-full">
			<Section>
				<Suspense fallback={<Loader />}>
					<ItemDetails item={item} setItem={setItem}/>
				</Suspense>
			</Section>
		</div>
	)
};

export default collectionId;