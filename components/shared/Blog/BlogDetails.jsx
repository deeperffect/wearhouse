import { AuthContext } from "@app/contexts/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const BlogDetails = ({blog, setBlog}) => {
	const { user } = useContext(AuthContext);
	const router = useRouter();
	async function handleLike() {
		const response = await fetch(`/api/blog/${blog._id}/like`, {
			method: "POST",
			body: JSON.stringify({
				userId: user.id,
				blogId: blog._id
			})
		});
		const data = await response.json();
		setBlog(data);
	};

	const onEdit = () => {
		router.push(`/blog/${blog._id}/edit`);
	};

	return (
		<article className="flex flex-col items-center mx-auto max-w-[75rem] py-8 rounded-xl bg-slate-200/50">
			<header>
				<h2 className="p-2 font-bold text-3xl">{blog.title}</h2>
			</header>
			<div className="flex mx-auto flex-col items-center p-4">
				<figure>
					<img src={blog.image} alt={blog.title} />
				</figure>		
				<p className="bg-slate-400/50 p-4 rounded-xl my-4">{blog.description}</p>
					{
						user && user.id === blog.owner && 
						<div onClick={onEdit} className="cursor-pointer bg-darkOrange hover:bg-lightOrange text-white p-2 my-2 w-full text-center max-w-[30rem]">
								<button>Edit</button>
							</div>
					}     
					{
						user && !blog.likes?.includes(user.id) && user.id !==blog.owner &&
							<div  onClick={handleLike} className=" cursor-pointer bg-darkOrange hover:bg-lightOrange text-white p-2 my-2 w-full text-center max-w-[30rem]">
								<button>Like</button>
							</div>
					}
					{
						user && blog.likes?.includes(user.id) &&
						<div className="text-center">
								<p>Thank you for liking the post!</p>
							</div>
					}
			</div>
		</article>  
	)
};

export default BlogDetails;