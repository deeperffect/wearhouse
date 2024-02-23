'use client'
import { AuthContext } from "@app/contexts/AuthContext";
import ItemCard from "@components/shared/Item/ItemCard";
import { useContext, useEffect, useState } from "react";

const FavItems = () => {
	const { user } = useContext(AuthContext);
	const [favItems, setFavItems] = useState([]);

	useEffect(()=> {

	async function fetchFavItems() {
		if(user && user.id) {
			const response = await fetch(`/api/user/${user.id}/fav-items`, {method: "GET"});
			const favItemsFound = await response.json();
			setFavItems(favItemsFound);
		};
	};

    fetchFavItems();
  }, []);


	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
			{
				favItems && favItems.length > 0 ? (favItems.map((card, index) => {
					return (
						<ItemCard card={card} key={index} />     
					)
				})) : (
					<div>You have not added any items to favorites yet.</div>
				)
			}
		</div>
	)
};

export default FavItems;