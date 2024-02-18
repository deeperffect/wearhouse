'use client'
import { createContext, useState } from 'react';

export const ShoppingBagContext = createContext();

export const ShoppingBagProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	function addToCart(item) {
		// setCart(cart => [...cart, item]);
		const currentArr = cart;
		currentArr.push(item);
		setCart(currentArr);
        console.log('item added to cart');
        console.log(cart);
	};
	
	return (
		<ShoppingBagContext.Provider value={{ cart, setCart, addToCart }}>
			{children}
		</ShoppingBagContext.Provider>
	)
};