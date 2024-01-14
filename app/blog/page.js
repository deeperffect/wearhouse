'use client'
import { AuthContext } from "@app/contexts/AuthContext"
import Section from "@components/Section"
import BlogsOfficial from "@components/shared/BlogsOfficial"
import Searchbar from "@components/shared/Searchbar"
import BlogsUser from "@components/shared/BlogsUser"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"


const Blog = () => {
  const { user } = useContext(AuthContext)
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
      <Searchbar />

      <Section>  
        <div className="grid grid-cols-[1fr_2fr] gap-4">
          <div>
            <h2 className="text-2xl font-bold pb-4">Official posts</h2>
            <BlogsOfficial />
          </div>
          <div>
            <h2 className="text-2xl font-bold pb-4">User posts</h2>           
            <h3>Latest posts</h3>        
            <BlogsUser />
          </div>    
        </div>    
      </Section>  
    </>
  )
}

export default Blog