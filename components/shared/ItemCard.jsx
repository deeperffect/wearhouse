import Section from "@components/Section"

const ItemCard = ({ card }) => {
  return (
    <Section>
      <div className="bg-slate-700 p-2 mb-8">

      <article>
        <figure className="relative pb-[60%]">
          <img className="absolute inset-0 w-full h-full object-cover" src={card.image} alt={card.title}></img>
          <p className="px-2 max-w-full text-xl text-white absolute bottom-0 left-0 bg-black/50 rounded-full">€{card.price}</p>
          <p className="text-xl max-w-full uppercase px-2 text-white absolute bottom-0 right-0 bg-black/50 rounded-full">{card.size}</p>
        </figure>
        <h3 className="py-2 line-clamp-1 font-[600]">{card.title}</h3>
      </article>
      </div>
    </Section>
  )
}

export default ItemCard