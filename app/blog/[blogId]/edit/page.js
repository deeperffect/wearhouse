'use client'
import { AuthContext } from "@app/contexts/AuthContext";
import Section from "@components/Section";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";

const EditBlog = ({params}) => {
	const { user } = useContext(AuthContext);
	const [blog, setBlog] = useState({});
	const [image, setImage] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const router = useRouter();

	useEffect(() => {
		async function fetchBlog() {
			const response = await fetch(`/api/blog/${params.blogId}`, {method: "GET"});
			const blogFound = await response.json();
			setBlog(blogFound);
			setImage(blogFound.image);
			setTitle(blogFound.title);
			setDescription(blogFound.description);
		}
		fetchBlog();
	}, []);

	async function handleEdit(e) {
		e.preventDefault();
		const blogData = {
			image: image,
			title: title,
			description: description,
			owner: user.id
		};

		const response = await fetch(`/api/blog/${params.blogId}/edit`, {
			method: 'PATCH',
			body: JSON.stringify({
				blogData: blogData,
				blogId: params.blogId
			})
		});

		if(response.ok) {
			console.log('blog edited');
			router.push(`/blog/${params.blogId}`);
		};
	};

	async function handleDelete(e) {
		e.preventDefault();
		const response = await fetch(`/api/blog/${params.blogId}/delete`, {
			method: 'DELETE'
		});

		if(response.ok) {
			console.log('blog deleted');
			router.push('/blog');
		};
	};
  
	return (
		<div className="bg-white/50 h-pageHeight">
			<Section>     
				<header>
					<h2 className="text-3xl p-4 text-center font-bold">Edit post</h2>
				</header>
				<form className="text-black max-w-[30rem] mx-auto p-4 bg-slate-200/50 rounded-xl">
					<div className="pb-4">
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder={blog.title}
						value={title} onChange={(e) => setTitle(e.target.value)} />
					</div>
					<div className="pb-4">
						<textarea className="rounded-md max-w-full w-full p-2 leading-none" rows="16" cols="50" placeholder={blog.description}
						value={description} onChange={(e) => setDescription(e.target.value)}/>
					</div>
					<div className="pb-4">
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder={blog.image}
						value={image} onChange={(e) => setImage(e.target.value)}/>
					</div>
					<button className="bg-darkOrange hover:bg-lightOrange text-black w-full p-2 mb-4" onClick={handleEdit}>Edit</button>
					<button className="bg-red-400 text-black w-full p-2" onClick={handleDelete}>Delete</button>
				</form>  
			</Section>
		</div>
	)
};
export default EditBlog;