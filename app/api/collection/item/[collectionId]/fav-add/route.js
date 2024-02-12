import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";
export async function POST(request) {
	await connectDB();
	const { userId, itemId } = await request.json();
	try {
		const itemFound = await Item.findById(itemId);
		if (!itemFound) {
			console.log('Item not found');
			return new Response(JSON.stringify({ error: 'Item not found' }), { status:  404 });
		}
		if (!itemFound.favorites.includes(userId)) {
			await Item.findOneAndUpdate({ _id: itemId }, { $addToSet: { favorites: userId } });
		} else {
			await Item.findOneAndUpdate({ _id: itemId }, { $pull: { favorites: userId } });
		}
		const updatedItem = await Item.findById(itemId);
		return new Response(JSON.stringify(updatedItem));
		} catch (error) {
			console.log(error);
			return new Response(JSON.stringify({ error: 'Error adding to favorites' }), { status:  500 });
	}
}