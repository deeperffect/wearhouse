'use client'
import { useContext, useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { CheckboxesContext } from '@app/contexts/CheckboxesContext';

const Items = ({ category }) => {
	const [items, setItems] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
	const { sexesArray, sizesArray } = useContext(CheckboxesContext);
	const sexNames = sexesArray.filter((sex) => sex.checked).map((sex) => sex.value);
	const sizeNames = sizesArray.filter((size) => size.checked).map((size) => size.value);
	const filterLength = sexNames.length + sizeNames.length;
	const itemsToDisplay = filterLength ? filteredItems : items;

	useEffect(() => {	
		async function filterByCategory(category) {
			try {
				const response = await fetch(`/api/collection/${category}`, { method: "GET" });
				const data = await response.json();
				if (data.length === 0) {
					console.log('No items found')
					return
				};
				setItems(data);
			} catch (error) {
				console.log("Error fetching items:", error);
			}
		};	

		function filterByCheckboxes() {
			const filteredItems = items.filter((item) => sexNames.length ? sexNames.includes(item.sex) : true).filter((item) => sizeNames.length ? sizeNames.includes(item.size) : true);
			setFilteredItems(filteredItems);
		};

		filterByCategory(category);
		filterByCheckboxes();
	}, [category, sexesArray, sizesArray]);

	return (
		<>
			{itemsToDisplay.length > 0 ? (itemsToDisplay.map((card, index) => (
				<ItemCard card={card} key={index} />
				))) : (
					<div>No items to display.</div>
				)
			}
		</>
  )
}

export default Items;