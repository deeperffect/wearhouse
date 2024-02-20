import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ card }) => {
	const date = card.createdAt;
	const dateObject = new Date(date);
	const month = dateObject.toLocaleString('default', { month: 'short' });
	const day = dateObject.getDate();
	const year = dateObject.getFullYear();
	const formattedDate = `${month} ${day} ${year}`;
	return (
		<article className="hover:scale-105 transition duration-500 ease-in-out">
			<Link href={`/blog/${card._id}`}>
			<figure className="pb-[56.25%] relative">
				<img className="absolute inset-0 w-full h-full object-cover object-center" src={card.image} alt={card.title} width={300} height={32}/>
				<p className="absolute bottom-0 left-0 py-1 px-2 rounded-tr-lg max-w-full text-white bg-black/50">{formattedDate}</p>
				{
					card.likes.length > 0 &&
					<>
						<Image className="absolute bottom-0 right-0 py-2 px-1 max-w-full"
						src="/assets/icons/heart.svg"
						alt="heart icon"
						width={32}
						height={32} />
						<p className="text-white absolute bottom-0 right-0 py-2 px-9 max-w-full">{card.likes.length}</p>
					</>
				}
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
};

export default BlogCard;
 