'use client'
import { AuthContext } from "@app/contexts/AuthContext"
import Section from "@components/Section"
import { useRouter } from "next/navigation"
import { useContext, useState } from 'react'

const CreatePost = () => {
  const { user } = useContext(AuthContext)
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  async function handleCreate(e) {
    e.preventDefault()
    const itemData = {
      image: image,
      title: title,
      description: description,
      owner: user.id
    }
    const response = await fetch('/api/blog/create', {
      method: 'POST',
      body: JSON.stringify(itemData)
    })

    console.log(response)
    if(response.ok) {
      console.log('item created')
      router.push('/blog')
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
          <input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Description.."
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

export default CreatePost