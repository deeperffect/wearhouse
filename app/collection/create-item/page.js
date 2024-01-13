'use client'
import { AuthContext } from "@app/contexts/AuthContext"
import Section from "@components/Section"
import { useRouter } from "next/navigation"
import { useContext, useState } from 'react'

const CreateItem = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [size, setSize] = useState('')
  const [sex, setSex] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const { user } = useContext(AuthContext)
  const router = useRouter()

  async function handleCreate(e) {
    e.preventDefault()
    const itemData = {
      title: title,
      description: description,
      price: price,
      image: image,
      size: size,
      sex: sex,
      category: category,
      owner:  user.id
    }
    console.log(itemData)
    const response = await fetch('/api/collection/create-item', {
      method: 'POST',
      body: JSON.stringify(itemData)
    })

    if(response.ok) {
      console.log('item created')
      router.push('/collection')
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
        <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
        <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="jackets">Jackets</option>
          <option value="hoodies">Hoodies</option>
          <option value="shirts">Shirts</option>
          <option value="vests">Vests</option>
          <option value="pants">Pants</option>
          <option value="shorts">Shorts</option>
          <option value="shoes">Shoes</option>
          <option value="socks">Socks</option>
          <option value="acessories">Accessories</option>
          <option value="jewelry">Jewelry</option>
          <option value="others">Others</option>
        </select>
        <button className="text-white" onClick={handleCreate}>Create</button>
      </form>
    </Section>
  )
}

export default CreateItem