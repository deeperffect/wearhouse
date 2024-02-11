import Section from "@components/Section";
import Link from "next/link";

const ItemCard = ({ card }) => {
	return (
		<Section>
			<div className="bg-darkBlue hover:bg-midBlue p-2 mb-8">
				<article>
					<figure className="relative pb-[60%]">
						<Link href={`/collection/item/${card._id}`}>
							<img className="absolute inset-0 w-full h-full object-cover" src={card.image} alt={card.title}></img>
						</Link>
						<p className="px-2 max-w-full text-xl text-white absolute bottom-0 left-0 bg-black/50 rounded-full">€{card.price}</p>
						<p className="text-xl max-w-full uppercase px-2 text-white absolute bottom-0 right-0 bg-black/50 rounded-full">{card.size}</p>
					</figure>
					<h3 className="py-2 line-clamp-1 text-lightOrange hover:text-darkOrange font-[400]">{card.title}</h3>
				</article>
			</div>
		</Section>
	)
};

export default ItemCard;