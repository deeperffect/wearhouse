'use client'
import { AuthContext } from "@app/contexts/AuthContext";
import Section from "@components/Section";
import { useRouter } from "next/navigation";
import { useContext, useState } from 'react';
import isAuth from "@app/utils/isAuth";
import { CATEGORIES, SIZES, SEXES } from "@constants/selectOptions";
import Select from "@components/shared/Select";

const CreateItem = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [size, setSize] = useState('xs');
	const [sex, setSex] = useState('male');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');
	const [category, setCategory] = useState('jackets');
	const { user } = useContext(AuthContext);
	const router = useRouter();

	async function handleCreate(e) {
	e.preventDefault();  
	if (title.length < 3 || title.length > 40) {
		console.error('Invalid title length');
		return;
	};  
	if (description.length < 8) {
		console.error('Invalid description length');
		return;
	};
	if (isNaN(parseFloat(price)) || price < 1) {
		console.error('Invalid price');
		return;
	};
	if (image.length < 8) {
		console.error('Invalid image URL length');
		return;
	};
  
	const itemData = {
		title: title,
		description: description,
		price: price,
		image: image,
		size: size,
		sex: sex,
		category: category,
		owner: user.id,
	};
  
	try {
		const response = await fetch('/api/collection/create-item', {
			method: 'POST',
			body: JSON.stringify(itemData),
		});
		if (response.ok) {
			console.log('Item created');
			router.push('/collection/all');
		} else {
			const errorResponse = await response.json();
			console.error('Create item failed:', errorResponse.error);
		};
	} catch (error) {
		console.error('Create item failed:', error);
	};
};
  

	return (
		<Section>
			<header>
				<h2 className="text-3xl p-4 text-center font-bold">Create listing</h2>
			</header>
			<form className="text-black max-w-[30rem] mx-auto p-4">
				<div className="pb-4">
					<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Title.."
					value={title} onChange={(e) => setTitle(e.target.value)} />  
				</div>
				<div className="pb-4">
					<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Description.."
					value={description} onChange={(e) => setDescription(e.target.value)}/>
				</div>
				<div className="pb-4">
					<input className="rounded-md max-w-full w-full p-2 leading-none" type="number" placeholder="Price.."
					value={price} onChange={(e) => setPrice(e.target.value)}/>
				</div>
				<div className="pb-4">
					<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder="Image.."
					value={image} onChange={(e) => setImage(e.target.value)}/>
				</div>
				<div className="pb-4">
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
					<Select
						value={size}
						onChange={(e) => {
						setSize(e.target.value)
						}}
						id='size'
						options={SIZES}
					/>
				</div>
				<button className="bg-gray-100 text-black w-full p-2" onClick={handleCreate}>Create</button>
			</form>
		</Section>
	)
};

export default isAuth(CreateItem);