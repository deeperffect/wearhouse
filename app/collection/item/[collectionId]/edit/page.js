'use client'
import { AuthContext } from "@app/contexts/AuthContext";
import Section from "@components/Section";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from 'react';
import isAuth from "@app/utils/isAuth";
import { CATEGORIES, SIZES, SEXES } from "@constants/selectOptions";
import Select from "@components/shared/Select";

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

	async function handleDelete(e) {
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
					<button className="bg-darkOrange hover:bg-lightOrange text-black w-full p-2 mb-4" onClick={handleEdit}>Edit</button>
					<button className="bg-red-400 text-black w-full p-2" onClick={handleDelete}>Delete</button>
				</form>
			</Section>
		</div>
	)
};

export default isAuth(EditItem);