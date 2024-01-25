'use client'
import React, { useContext, useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { CheckboxesContext } from '@app/contexts/CheckboxesContext'

const Items = ({ category }) => {
	const [items, setItems] = useState([])
	const { checkedBoxes } = useContext(CheckboxesContext)

	useEffect(() => {
		
		async function filterByCategory(category) {
			try {
				const response = await fetch(`/api/collection/${category}`, { method: "GET" })
				const data = await response.json()
				if (data.length === 0) {
					console.log('No items found')
					return
				}
				setItems(data)
			} catch (error) {
				console.log("Error fetching items:", error)
			}
		}
		
		filterByCategory(category)

	}, [category])

	useEffect(() => {
		function filterByCheckedBoxes() {
			const filteredItems = items.filter((item) => {
				return checkedBoxes.some((checkedBox) => item.sex === checkedBox || item.size === checkedBox)
			})
			setItems(filteredItems)
			console.log(checkedBoxes)
		}
	
		filterByCheckedBoxes()
	}, [checkedBoxes])


	return (
		<>
			{items.length > 0 ? (items.map((card, index) => (
				<ItemCard card={card} key={index} />
				))) : (
				<div>No items have been listed yet.</div>
				)}
		</>
  )
}

export default Items