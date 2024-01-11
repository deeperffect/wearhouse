import { BLOG_CARDS } from "@constants/blogCards"
import BlogCard from "./BlogCard"

const OfficialBlogs = () => {
  return (
    <div>
      {BLOG_CARDS.map((card, index) => {
        return (
          <BlogCard card={card} key={index}/>
          )
        })}
    </div>
  )  
}

export default OfficialBlogs