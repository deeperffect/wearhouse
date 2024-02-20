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
	const [errorMessage, setErrorMessage] = useState('');
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
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

	function handleDeleteConfirmation(e) {
		e.preventDefault();
        setShowDeleteConfirmation(true);
    };

    function handleDeleteCancel(e) {
		e.preventDefault();
        setShowDeleteConfirmation(false);
    };

	async function handleDeleteConfirm(e) {
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
					<h3 className="text-center pb-4">Please fill out the form below:</h3>
				</header>
				<form className="text-black max-w-[30rem] mx-auto p-4 bg-slate-200/50 rounded-xl">
					{errorMessage && (
						<div className="text-red-500 mb-4">{errorMessage}</div>
					)}
					<div className="pb-4">
						<h3 className="pb-1 font-bold">Title:</h3>
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Title.." value={title} onChange={(e) => setTitle(e.target.value)} />
					</div>
					<div className="pb-4">
						<h3 className="pb-1 font-bold">Description:</h3>
						<textarea rows='16' cols='50' className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Description.." value={description} onChange={(e) => setDescription(e.target.value)} />
					</div>
					<div className="pb-4">
						<h3 className="pb-1 font-bold">Image URL:</h3>
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Image.." value={image} onChange={(e) => setImage(e.target.value)} />
					</div>
					<button className="bg-darkOrange hover:bg-lightOrange text-black w-full p-2 mb-4" onClick={handleEdit}>Edit</button>
					<button className="bg-red-400 text-black w-full p-2" onClick={handleDeleteConfirmation}>Delete</button>
				</form>
				{showDeleteConfirmation && (
					<div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
						<div className="bg-white p-4 rounded-lg max-w-[15rem]">
							<p className="text-lg mb-4">Are you sure you want to delete this post?</p>
							<div className="flex justify-between">
								<button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleDeleteConfirm}>Yes</button>
								<button className="bg-gray-200 px-4 py-2 rounded-md" onClick={handleDeleteCancel}>No</button>
							</div>
						</div>
					</div>
				)}
			</Section>
		</div>
	)
};
export default EditBlog;

