'use client'
import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

const Items = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function fetchItems() {
      try{
        const response = await fetch('/api/collection', {method: "GET"})
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.log("Error fetching iems:", error)
      }
      
    }
    
    fetchItems()
  }, [])

  return (
    <>
      {items.map((card, index) => (
        <ItemCard card={card} key={index} />
      ))}
    </>
  )
}

export default Items