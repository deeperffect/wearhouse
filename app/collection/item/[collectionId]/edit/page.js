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
		<div className="bg-white/50 h-pageHeight">
			<Section>
				<header>
					<h2 className="text-3xl p-4 text-center font-bold">Edit listing</h2>
				</header>
				<form className="text-black max-w-[30rem] mx-auto p-4 bg-slate-200/50 rounded-xl">
					<div className="pb-4">
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="text" placeholder={item.title}
						value={title} onChange={(e) => setTitle(e.target.value)} />  
					</div>
					<div className="pb-4">
						<textarea className="rounded-md max-w-full w-full p-2 leading-none" rows="16" cols="50" placeholder={item.description}
						value={description} onChange={(e) => setDescription(e.target.value)}/>
					</div>
					<div className="pb-4">
						<input className="rounded-md max-w-full w-full p-2 leading-none" type="number" placeholder={item.price}
						value={price} onChange={(e) => setPrice(e.target.value)}/>
					</div>
					<div className="pb-4">
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