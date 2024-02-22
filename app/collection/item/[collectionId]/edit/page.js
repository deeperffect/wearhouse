'use client'
import { AuthContext } from "@app/contexts/AuthContext";
import Section from "@components/Section";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from 'react';
import isAuth from "@app/utils/isAuth";
import { CATEGORIES, SIZES, SEXES } from "@constants/selectOptions";
import Select from "@components/shared/Select";
import BackArrow from "@components/shared/BackArrow";

const EditItem = ({params}) => {
	const [item, setItem] = useState({});
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [size, setSize] = useState();
	const [sex, setSex] = useState();
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');
	const [category, setCategory] = useState();
	const [errorMessage, setErrorMessage] = useState('');
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
	const { user } = useContext(AuthContext);
	const router = useRouter();

	useEffect(() => {
		async function fetchItem() {
			const response = await fetch(`/api/collection/item/${params.collectionId}`, {method: "GET"});
			const itemFound = await response.json();
			setItem(itemFound);
			setTitle(itemFound.title);
			setDescription(itemFound.description);
			setSize(itemFound.size);
			setSex(itemFound.sex);
			setPrice(itemFound.price);
			setImage(itemFound.image);
			setCategory(itemFound.category);
		};
		fetchItem();
	}, []);


	async function handleEdit(e) {
		e.preventDefault()    
		let errorMessages = '';
		if (title.length < 3) {
			errorMessages += 'Invalid title length. Minimum 4. \n';
		};  
		if (description.length < 8) {
			errorMessages += 'Invalid description length. Minimum 8. \n';
		};
		if (isNaN(parseFloat(price)) || price < 1) {
			errorMessages += 'Invalid price. Minimum 1. \n';
		};
		if (image.length < 8) {
			errorMessages += 'Invalid image URL length. Minimum 4. \n';
		};
	
		if (errorMessages) {
			setErrorMessage(errorMessages);
			return;
		}

		const itemData = {
			title: title,
			description: description,
			price: price,
			image: image,
			size: size,
			sex: sex,
			category: category,
			owner: user.id
		};

		const response = await fetch(`/api/collection/item/${params.collectionId}/edit`, {
			method: 'PATCH',
			body: JSON.stringify({
				itemData: itemData,
				collectionId: params.collectionId,
			})
		});

		if(response.ok) {
			console.log('item edited');
			router.push(`/collection/item/${params.collectionId}`);
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
		e.preventDefault()
		const response = await fetch(`/api/collection/item/${params.collectionId}/delete`, {
			method: 'DELETE'
		});

		if(response.ok) {
			console.log('item deleted');
			router.push('/collection/all');
		}
    };
  
	return (
		<div className="bg-white/50">
			<Section>
				<BackArrow />
				<header>
					<h2 className="text-3xl p-4 text-center font-bold">Edit listing</h2>
				</header>
				<form className="text-black max-w-[30rem] mx-auto p-4 bg-slate-200/50 rounded-xl">
					{errorMessage && (
							<div className="text-red-500 mb-4">{errorMessage}</div>
						)}
					<div className="pb-4">
						<h3 className="pb-1 font-bold">Title:</h3>
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder={item.title}
						value={title} onChange={(e) => setTitle(e.target.value)} />  
					</div>
					<div className="pb-4">
						<h3 className="pb-1 font-bold">Description:</h3>
						<textarea className="rounded-md max-w-full w-full p-2 leading-none" rows="16" cols="50" placeholder={item.description}
						value={description} onChange={(e) => setDescription(e.target.value)}/>
					</div>
					<div className="pb-4">
						<h3 className="pb-1 font-bold">Price:</h3>
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="number" placeholder={item.price}
						value={price} onChange={(e) => setPrice(e.target.value)}/>
					</div>
					<div className="pb-4">
						<h3 className="pb-1 font-bold">Image URL:</h3>
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder={item.image}
						value={image} onChange={(e) => setImage(e.target.value)}/>
					</div>
					<div className="pb-4">
						<h3>Select category:</h3>
						<Select
							value={category}
							onChange={(e) => {
								setCategory(e.target.value)
							}}
							id='category'
							options={CATEGORIES}
						/>
					</div>
					<div className="pb-4">
						<h3>Select sex:</h3>
						<Select
							value={sex}
							onChange={(e) => {
							setSex(e.target.value)
						}}
							id='sex'
							options={SEXES}
							/>
					</div>
					<div className="pb-4">
						<h3>Select size:</h3>
						<Select
							className="uppercase"
							value={size}
							onChange={(e) => {
								setSize(e.target.value)
							}}
							id='size'
							options={SIZES}
							/>
					</div>
					<button className="bg-darkOrange hover:bg-lightOrange text-white w-full p-2 mb-4" onClick={handleEdit}>Edit</button>
					<button className="bg-red-400 text-white w-full p-2" onClick={handleDeleteConfirmation}>Delete</button>
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

export default isAuth(EditItem);