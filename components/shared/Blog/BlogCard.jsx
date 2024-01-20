import Link from "next/link"

const BlogCard = ({ card }) => {
  return (
    <article className="">
      <Link href={`/blog/${card._id}`}>
        <figure className="pb-[56.25%] relative">
          <img className="absolute inset-0 w-full h-full object-cover object-center" src={card.image} alt={card.title} width={300} height={32}/>
          <p className="absolute bottom-0 left-0 py-1 px-2 rounded-tr-lg max-w-full bg-black/50">{card.createdAt}</p>
        </figure>
        <div className="py-4 px-2">
          <header className="pb-4">
            <h3 className="font-[600] text-lg line-clamp-1">{card.title}</h3>
          </header>
          <div className="body-content">
            <p className="line-clamp-2">{card.description}</p>
          </div>   
        </div>
      </Link>
    </article>
  )
}

export default BlogCard
 