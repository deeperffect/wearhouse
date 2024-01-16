'use client'
import { AuthContext } from "@app/contexts/AuthContext"
import isAuth from "@app/utils/isAuth"
import Section from "@components/Section"
import { useRouter } from "next/navigation"
import { useContext, useState } from 'react'

const EditPost = ({blogId}) => {
  const { user } = useContext(AuthContext)
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  async function handleEdit(e) {
    e.preventDefault()
    const itemData = {
      image: image,
      title: title,
      description: description,
    }
    const response = await fetch(`{/api/blog/${blogId}/edit}`, {
      method: 'POST',
      body: JSON.stringify(itemData)
    })

    if(response.ok) {
      console.log('item edited')
      router.push(`/blog/${blogId}`)
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
        <button className="bg-gray-100 text-black w-full p-2" onClick={handleEdit}>Edit</button>
      </form>  
    </Section>
  )
}

export default isAuth(EditPost)