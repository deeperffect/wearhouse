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
    <div>
      <Section>
        <div className="max-w-[40rem] mx-auto">
          <Image src="/assets/images/pic1.jpg" alt="pic1" width={1024} height={36} />
          <h2 className="text-3xl uppercase text-center font-bold">Learn more about different styles</h2>
          <h2 className="p-2 text-2xl uppercase text-center font-bold">or</h2>
          <div className="text-3xl uppercase text-center font-bold" >
            {user ? 
              (<Link href="/blog/create">Show your Own Style</Link>)
              :
              (<Link href="register">Show your Own Style</Link>)
            }
            
          </div>
        </div>
      </Section>
      <Searchbar />
      <div className="flex justify-between mt-8">
        <Section>
          <h2 className="text-xl font-bold">Official posts</h2>
          <BlogsOfficial />
        </Section>
        <Section>
          <h2 className="text-xl font-bold">User posts</h2>
          <BlogsUser />
        </Section>
      </div>
    </div>
    
  )
}

export default Blog