'use client'
import { AuthContext } from "@app/contexts/AuthContext";
import isAuth from "@app/utils/isAuth";
import Section from "@components/Section";
import { useRouter } from "next/navigation";
import { useContext, useState } from 'react';

const CreateBlog = () => {
	const { user } = useContext(AuthContext);
	const [image, setImage] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const router = useRouter();

	async function handleCreate(e) {
		e.preventDefault();
		let errorMessages = '';

		if (!image || image.length < 4) {
			errorMessages += 'Invalid image URL length. Minimum 4. \n';
		}
		if (!title || title.length < 3) {
			errorMessages += 'Invalid title length. Minimum 3. \n';
		}
		if (!description || description.length < 8) {
			errorMessages += 'Invalid description length. Minimum 8. \n';
		}
	
		if (errorMessages) {
			setErrorMessage(errorMessages);
			return;
		}
  
		const blogData = {
			image: image,
			title: title,
			description: description,
			owner: user.id,
		};
  
		try {
			const response = await fetch('/api/blog/create', {
				method: 'POST',
				body: JSON.stringify(blogData),
				});
			if (response.ok) {
				console.log('Blog created');
				router.push('/blog');
			} else {
				const errorResponse = await response.json();
				console.error('Create blog failed:', errorResponse.error);
			};
		} catch (error) {
			console.error('Create blog failed:', error);
		};
	};

	return (
		<div className="bg-white/50 h-pageHeight">
			<Section>   
				<header>
					<h2 className="text-3xl p-4 text-center font-bold">Create post</h2>
					<h3 className="text-base pb-4 text-center">Please fill out the information below:</h3>
				</header>
				<form className="text-black max-w-[30rem] mx-auto p-8 rounded-md bg-slate-200/50">
					{errorMessage && (
							<div className="text-red-500 mb-4">{errorMessage}</div>
						)}
					<div className="pb-4">
						<h3 className="pb-1 font-bold">Title:</h3>
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Title.."
						value={title} onChange={(e) => setTitle(e.target.value)} />
					</div>
					<div className="pb-4">
						<h3 className="pb-1 font-bold">Description:</h3>
						<textarea className="rounded-md max-w-full w-full p-2 leading-none" rows="16" cols="50" placeholder="Description.."
						value={description} onChange={(e) => setDescription(e.target.value)}/>
					</div>
					<div className="pb-4">
						<h3 className="pb-1 font-bold">Image URL:</h3>
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Image.."
						value={image} onChange={(e) => setImage(e.target.value)}/>
					</div>
					<button className=" bg-darkOrange hover:bg-lightOrange text-black w-full p-2" onClick={handleCreate}>Create</button>
				</form>   
			</Section>
		</div>
	)
};

export default isAuth(CreateBlog);