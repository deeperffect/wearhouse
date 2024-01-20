'use client'
import { AuthContext } from "@app/contexts/AuthContext"
import Section from "@components/Section"
import Blogs from "@components/shared/Blog/Blogs"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"


const Blog = () => {
  const { user } = useContext(AuthContext)
  const [blogsUser, setBlogsUser] = useState([])
  const [blogsOfficial, setBlogsOfficial] = useState([])
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch('/api/blog', { method: "GET" })
        const [userBlogs, officialBlogs] = await response.json()

        setBlogsUser(userBlogs)
        setBlogsOfficial(officialBlogs)
      } catch (error) {
        console.error("Error fetching blogs:", error)
      }
    }

    fetchBlogs()

  }, [])

  return (
    
    <>
      <Section>   
        <figure>
          <Image src="/assets/images/pic1.jpg" alt="pic1" width={1024} height={36} />
        </figure>   
        <header className="text-center">
          <h2 className="text-3xl uppercase font-bold">Learn more about different styles</h2>
          <h2 className="p-2 text-2xl uppercase font-bold">or</h2>
          <Link href={user? "/blog/create" : "/login"} className="text-3xl uppercase font-bold">Show your Own Style</Link>

        </header>  
      </Section>
      <Section>  
        <div className="grid grid-cols-[1fr_2fr] gap-4">
          <div>
            <h2 className="text-2xl font-bold pb-4">Official posts</h2>
            <Blogs blogs={blogsOfficial} className="grid"/>
          </div>
          <div>
            <h2 className="text-2xl font-bold pb-4">User posts</h2>                 
            <Blogs blogs={blogsUser} className="grid grid-cols-2 gap-4"/>
          </div>    
        </div>    
      </Section>  
    </>
  )
}

export default Blog