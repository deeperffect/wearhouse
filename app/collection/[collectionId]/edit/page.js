'use client'
import { AuthContext } from "@app/contexts/AuthContext"
import Section from "@components/Section"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from 'react'
import isAuth from "@app/utils/isAuth"

const EditItem = ({params}) => {
  const [item, setItem] = useState({})
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [size, setSize] = useState()
  const [sex, setSex] = useState()
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState()
  const { user } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(`/api/collection/${params.collectionId}`, {method: "GET"})
      const itemFound = await response.json()
      setItem(itemFound)
      setTitle(itemFound.title)
      setDescription(itemFound.description)
      setSize(itemFound.size)
      setSex(itemFound.sex)
      setPrice(itemFound.price)
      setImage(itemFound.image)
      setCategory(itemFound.category)
    }
    fetchItem()
  }, [])


  async function handleEdit(e) {
    e.preventDefault()
    
    if (title.length < 3 || title.length > 40) {
      console.error('Invalid title length')
      return
    }
  
    if (description.length < 8) {
      console.error('Invalid description length')
      return
    }
  
    if (isNaN(parseFloat(price)) || price < 1) {
      console.error('Invalid price')
      return
    }
  
    if (image.length < 8) {
      console.error('Invalid image URL length')
      return
    }
    const itemData = {
      title: title,
      description: description,
      price: price,
      image: image,
      size: size,
      sex: sex,
      category: category,
      owner: user.id
    }

    const response = await fetch(`/api/collection/${params.collectionId}/edit`, {
      method: 'PATCH',
      body: JSON.stringify({
        itemData: itemData,
        collectionId: params.collectionId,
      })
    })

    if(response.ok) {
      console.log('item edited')
      router.push(`/collection/${params.collectionId}`)
    }
  }

  async function handleDelete(e) {
    e.preventDefault()
    const response = await fetch(`/api/collection/${params.collectionId}/delete`, {
      method: 'DELETE'
    })

    if(response.ok) {
      console.log('item deleted')
      router.push('/collection')
    }
  }
  
  return (
    <Section>
      <header>
        <h2 className="text-3xl p-4 text-center font-bold">Edit listing</h2>
      </header>
      <form className="text-black max-w-[30rem] mx-auto p-4">
        <div className="pb-4">
          <input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder={item.title}
          value={title} onChange={(e) => setTitle(e.target.value)} />  
        </div>
        <div className="pb-4">
          <input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder={item.description}
          value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className="pb-4">
          <input className="rounded-md max-w-full w-full p-2 leading-none" type="number" placeholder={item.price}
          value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div className="pb-4">
          <input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder={item.image}
          value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div className="pb-4">
          <select className="rounded-md max-w-full w-full p-2 leading-none" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
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
        </div>
        <div className="pb-4">
          <select className="rounded-md max-w-full w-full p-2 leading-none" id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>
        <div className="pb-4">
          <select className="rounded-md max-w-full w-full p-2 leading-none" id="size" value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
        </div>
        <button className="bg-gray-100 text-black w-full p-2 rounded-xl mb-4" onClick={handleEdit}>Edit</button>
        <button className="bg-red-400 text-black w-full p-2 rounded-xl" onClick={handleDelete}>Delete</button>
      </form>
    </Section>
  )
}

export default isAuth(EditItem)