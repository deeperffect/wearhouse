'use client'
import Section from "@components/Section"
import Items from "@components/shared/Item/Items"
import Searchbar from "@components/shared/Searchbar"
import { useState } from "react"


const Collection = () => {
  const [category, setCategory] = useState(undefined)
  
  return (
    <>
      <Section>
        <h2 className="text-center font-bold text-3xl py-4">Collection</h2>
      </Section>
      <Searchbar />
      <Section>
        <h3 className="text-center text-2xl pb-4">All items</h3>
        <select className="rounded-md text-black" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="jackets">Jackets</option>
            <option value="hoodies">Hoodies</option>
            <option value="shirts">Shirts</option>
            <option value="vests">Vests</option>
            <option value="pants">Pants</option>
            <option value="shorts">Shorts</option>
            <option value="shoes">Shoes</option>
            <option value="socks">Socks</option>
            <option value="accessories">Accessories</option>
            <option value="jewelry">Jewelry</option>
            <option value="others">Others</option>
        </select>
        <div className="grid grid-cols-3">
          <Items category={category}/>
        </div>
      </Section>
    </>
  )
}

export default Collection