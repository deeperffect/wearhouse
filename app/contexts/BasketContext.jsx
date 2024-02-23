'use client'
import { Inder } from 'next/font/google';
import React, { createContext, useEffect, useState } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basketItems, setBasketItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
    const [totalPrice, setTotalPrice] = useState(null);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(basketItems));
        calculatePrice();
    }, [basketItems]);

    function incrementItemCount(item) {
        const itemIndex = basketItems.findIndex(basketItem => item._id === basketItem.item._id);
        console.log(itemIndex)
        const updatedBasketItems = [...basketItems];
        updatedBasketItems[itemIndex].count += 1;
        setBasketItems(updatedBasketItems);
        calculatePrice(); 
    };

    function decrementItemCount(item) {
        const itemIndex = basketItems.findIndex(basketItem => item._id === basketItem.item._id);
        const updatedBasketItems = [...basketItems];
        updatedBasketItems[itemIndex].count -= 1;
        if (updatedBasketItems[itemIndex].count < 1) {
            const itemToRemove = updatedBasketItems[itemIndex];
            setBasketItems(updatedBasketItems.filter(item => item.item._id !== itemToRemove.item._id));
            return;
        }
        setBasketItems(updatedBasketItems);
        calculatePrice();    
    };

    const addToBasket = (item) => {
        if (basketItems.some(basketItem => item._id === basketItem.item._id)) {
            incrementItemCount(item);
            calculatePrice();    
            return;
        };
        setBasketItems(prev => [...prev, { item, count:1 }]);
        calculatePrice();    
    };
    
    const removeFromBasket = (item) => {
        setBasketItems(basketItems.filter(basketItem => item._id !== basketItem.item._id));
        calculatePrice();    
    };

    const calculatePrice = () => {
        let sum = 0;
        basketItems.forEach(item => {
            const itemPrice = item.item.price;
            const itemCount = item.count;
            sum += itemPrice * itemCount;
        })
        setTotalPrice(sum);
    };

    return (
        <BasketContext.Provider value={{ basketItems, totalPrice, addToBasket, removeFromBasket, incrementItemCount, decrementItemCount }}>
            {children}
        </BasketContext.Provider>
    );
};
