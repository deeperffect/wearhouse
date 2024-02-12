import connectDB from "@app/utils/connectDB"
import Item from "@models/Item"
export async function POST(request) {
	await connectDB();
	const data = await request.json();
	const { title, description, price, image, size, sex, category, owner } = data;
	const newItem = {
		title,
		description,
		price,
		image,
		size,
		sex,
		category,
		owner,
	};
	try {
		await Item.create(newItem);
		return new Response(JSON.stringify(newItem));
	} catch (error) {
		console.error('Create item failed:', error);
		return new Response(JSON.stringify({ error: 'Create item failed' }), { status: 500 });
	};
};
