import { BLOG_CARDS } from "@constants/blogCards"
import BlogCard from "./BlogCard"

const BlogsOfficial = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {BLOG_CARDS.map((card, index) => {
        return (
          <BlogCard card={card} key={index}/>
          )
        })}
    </div>
  )  
}

export default BlogsOfficial