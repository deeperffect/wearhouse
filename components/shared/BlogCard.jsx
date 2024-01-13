const BlogCard = ({ card }) => {
  return (
    <div className="max-w-[30rem]">   
      <div>
        <img src={card.image} alt={card.title} width={300} height={32}/>
        <div className="text-center">
          <h2 className="mb-2">{card.title}</h2>
          <p className="text-sm">{card.createdAt}</p>
          <p className="mt-2">{card.description}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard