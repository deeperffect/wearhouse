'use client'
import { AuthContext } from "@app/contexts/AuthContext"
import isAuth from "@app/utils/isAuth"
import Section from "@components/Section"
import { useRouter } from "next/navigation"
import { useContext, useState } from 'react'

const CreateBlog = () => {
  const { user } = useContext(AuthContext)
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  async function handleCreate(e) {
    e.preventDefault()
  
    if (!image || image.length < 4) {
      console.error('Invalid image URL length')
      return
    }
  
    if (!title || title.length < 3) {
      console.error('Invalid title length')
      return
    }
  
    if (!description || description.length < 8) {
      console.error('Invalid description length')
      return
    }
  
    const blogData = {
      image: image,
      title: title,
      description: description,
      owner: user.id,
    }
  
    try {
      const response = await fetch('/api/blog/create', {
        method: 'POST',
        body: JSON.stringify(blogData),
      })
  
      if (response.ok) {
        console.log('Blog created')
        router.push('/blog')
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
        <h2 className="text-3xl p-4 text-center font-bold">Create post</h2>
      </header>
      <form className="text-black max-w-[30rem] mx-auto p-4">
        <div className="pb-4">
          <input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Title.."
          value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="pb-4">
          <textarea className="rounded-md max-w-full w-full p-2 leading-none" rows="4" cols="50" placeholder="Description.."
          value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className="pb-4">
          <input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Image.."
          value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <button className="bg-gray-100 text-black w-full p-2" onClick={handleCreate}>Create</button>
      </form>  
    </Section>
  )
}

export default isAuth(CreateBlog)