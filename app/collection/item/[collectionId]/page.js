'use client'
import Section from "@components/Section"
import ItemDetails from "@components/shared/Item/ItemDetails"
import { useEffect, useState } from "react"

const collectionId = ({ params }) => {
  const [item, setItem] = useState({})

  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(`/api/collection/item/${params.collectionId}`, {method: "GET"})
      const itemFound = await response.json()
      setItem(itemFound)
    }
    fetchItem()
  }, [])

  return (
    <Section>
      <ItemDetails item={item}/>
    </Section>
  )
}

export default collectionId