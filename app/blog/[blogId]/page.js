'use client'
import Section from "@components/Section"
import BlogDetails from "@components/shared/BlogDetails"
import Loader from "@components/shared/Loader"
import { Suspense, useEffect, useState } from "react"


const BlogDetailsPage = ({ params }) => {
  const [blog, setBlog] = useState({})

  useEffect(() => {
    async function fetchBlog() {
      try{
        const response = await fetch(`/api/blog/${params.blogId}`, {method: "GET"})
        const blogFound = await response.json() 
        setBlog(blogFound)  
      } catch (error) {
        console.log("Error fetching blog:", error)
      }
    }
    fetchBlog()
  }, [])
  
  return (
    <Section>
      <Suspense fallback={<Loader />}>
        <BlogDetails blog={blog}/>
      </Suspense>
    </Section>
  )
}

export default BlogDetailsPage