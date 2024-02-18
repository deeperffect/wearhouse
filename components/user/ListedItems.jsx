'use client'

import { AuthContext } from "@app/contexts/AuthContext";
import ItemCard from "@components/shared/Item/ItemCard";
import { useContext, useEffect, useState } from "react";

const ListedItems = () => {
	const { user } = useContext(AuthContext);
	const [userItems, setUserItems] = useState([]);

	useEffect(()=> {

	async function fetchUserItems() {
		if(user && user.id) {
			const response = await fetch(`/api/user/${user.id}/user-items`, {method: "GET"});
			const userItemsFound = await response.json();
			setUserItems(userItemsFound);
		};
	};

    fetchUserItems();
  }, []);


	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{
				userItems && userItems.length > 0 ? (userItems.map((card, index) => {
					return (
						<ItemCard card={card} key={index} />     
					)
				})) : (
					<div>You have not listed any items yet.</div>
					)
				}
		</div>
	)
};

export default ListedItems;