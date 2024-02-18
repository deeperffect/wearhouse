'use client'
import React, { useState } from 'react'
import ShoppingBag from '@components/shared/ShoppingBag';
import { ShoppingBagProvider } from '@app/contexts/ShoppingBagContext';

const Cart = () => {

  return (
    <ShoppingBagProvider>
      <h2>Shopping Bag</h2>
      <ShoppingBag />
    </ShoppingBagProvider>

  )
}

export default Cart;