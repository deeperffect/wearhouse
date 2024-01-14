import React, { useEffect, useState } from "react"
import BlogCard from "./BlogCard"

const BlogsUser = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch('/api/blog', { method: "GET" })
        const data = await response.json()
        setBlogs(data)
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4">
      {blogs.map((card, index) => (
        <BlogCard card={card} key={index} />
        ))}
    </div>
   
  )
}

export default BlogsUser;
