import { ShoppingBagContext } from '@app/contexts/ShoppingBagContext'
import React, { useContext } from 'react'
import ItemCard from './Item/ItemCard';

const ShoppingBag = () => {
	const { cart } = useContext(ShoppingBagContext);
	console.log(cart);
	
	return (
		<>
			{
				cart.length > 0 &&
					cart.map((card, index) => {
						<div>
							<ItemCard card={card} key={index}/>
							<button>-</button>
						</div>
					})
			}
		</>
	)
}

export default ShoppingBag;