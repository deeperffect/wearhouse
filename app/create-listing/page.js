'use client'
import Section from "@components/Section"
import { useState } from 'react'
const CreateListing = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  async function handleCreate(e) {
    e.preventDefault()
    const itemData = {
      title: title,
      description: description,
      price: price,
      image: image,
      category: category
    }

    const response = await fetch('api/create-listing', {
      method: 'POST',
      body: JSON.stringify(itemData)
    })

    if(response.ok) {
      console.log('item created')
    }
  }

  return (
    <Section>
      <h2 className="text-xl pb-4 text-center font-bold">Create listing</h2>
      <form className="text-black">
        <input type="text" placeholder="Title.."
        value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description.."
        value={description} onChange={(e) => setDescription(e.target.value)}/>
        <input type="number" placeholder="Price.."
        value={price} onChange={(e) => setPrice(e.target.value)}/>
        <input type="text" placeholder="Image.."
        value={image} onChange={(e) => setImage(e.target.value)}/>
        <select id="category">
          <option value="jackets">jackets</option>
          <option value="hoodies">hoodies</option>
          <option value="shirts">shirts</option>
          <option value="vests">vests</option>
          <option value="pants">pants</option>
          <option value="shorts">shorts</option>
          <option value="shoes">shoes</option>
          <option value="socks">socks</option>
          <option value="acessories">acessories</option>
          <option value="jewelry">jewelry</option>
          <option value="others">others</option>
        </select>
        <button className="text-white" onClick={handleCreate}>Create</button>
      </form>
    </Section>
  )
}

export default CreateListing