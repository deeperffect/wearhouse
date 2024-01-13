import Section from "@components/Section"

const ItemCard = ({ card }) => {
  return (
    <Section>
      <h2>{card.title}</h2>
      <img src={card.image} alt={card.title}></img>
      <p>{card.size}</p>
      <p>{card.price}</p>
    </Section>
  )
}

export default ItemCard