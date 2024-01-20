'use client'
import isAuth from "@app/utils/isAuth"
import Section from "@components/Section"
import { useRouter } from "next/navigation"
import { useState } from 'react'

const EditPost = ({blogId}) => {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  async function handleEdit(e) {
    e.preventDefault()

    if (!image || image.length < 4) {
      console.error('Invalid image URL length')
      return
    }
  
    if (!title || title.length < 3 || title.length > 40) {
      console.error('Invalid title length')
      return
    }
  
    if (!description || description.length < 8) {
      console.error('Invalid description length')
      return
    }

    const itemData = {
      image: image,
      title: title,
      description: description,
    }
    
    try {

      const response = await fetch(`{/api/blog/${blogId}/edit}`, {
        method: 'POST',
        body: JSON.stringify(itemData)
      })

    if(response.ok) {
      console.log('item edited')
      router.push(`/blog/${blogId}`)
    } else {
      const errorResponse = await response.json()
      console.error('Create blog failed:', errorResponse.error)
    }
  } catch (error) {
    console.error('Create blog failed:', error)
  }
}

  return (
    <Section>     
      <header>
        <h2 className="text-3xl p-4 text-center font-bold">Edit post</h2>
      </header>
      <form className="text-black max-w-[30rem] mx-auto p-4">
        <div className="pb-4">
          <input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Title.."
          value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="pb-4">
          <input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Description.."
          value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className="pb-4">
          <input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Image.."
          value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <button className="bg-gray-100 text-black w-full p-2 rounded-xl" onClick={handleEdit}>Edit</button>
      </form>  
    </Section>
  )
}

export default isAuth(EditPost)