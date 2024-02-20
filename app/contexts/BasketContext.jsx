'use client'
import React, { createContext, useState } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basketItems, setBasketItems] = useState([]);

    const addToBasket = (item) => {
        setBasketItems([...basketItems, item]);
        localStorage.setItem('items', JSON.stringify(basketItems));
    };

    const removeFromBasket = (itemId) => {
        setBasketItems(basketItems.filter(item => item.id !== itemId));    
        localStorage.setItem('items', JSON.stringify(basketItems));  
    };

    return (
        <BasketContext.Provider value={{ basketItems, addToBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    );
};
