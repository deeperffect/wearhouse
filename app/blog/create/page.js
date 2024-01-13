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
      <h2 className="text-xl pb-4 text-center font-bold">Create post</h2>
      <form className="text-black">
        <input type="text" placeholder="Title.."
        value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description.."
        value={description} onChange={(e) => setDescription(e.target.value)}/>
        <input type="text" placeholder="Image.."
        value={image} onChange={(e) => setImage(e.target.value)}/>
        <button className="text-white" onClick={handleCreate}>Create</button>
      </form>  
    </Section>
  )
}

export default CreatePost