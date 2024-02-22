'use client'
import Section from "@components/Section";
import BackArrow from "@components/shared/BackArrow";
import ItemDetails from "@components/shared/Item/ItemDetails";
import { useEffect, useState } from "react";

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
				<BackArrow />						
				<ItemDetails item={item} setItem={setItem}/>
			</Section>
		</div>
	)
};

export default collectionId;