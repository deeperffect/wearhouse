'use client'
import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

const LatestItems = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function fetchLatest() {
			try {
				const response = await fetch(`/api/collection/latest?limit=6`, { method: "GET" });
				const data = await response.json();
				if (data.length === 0) {
				console.log('No items found')
				return
				};
				setItems(data);
			} catch (error) {
				console.log("Error fetching items:", error);
			}
		
		}

		fetchLatest();
	}, []);

	return (
		<>
			{items.length > 0 ? (items.map((card, index) => (
				<ItemCard card={card} key={index} />
				))) : (
					<div>No items to display.</div>
				)
			}
		</>
  )
}

export default LatestItems;