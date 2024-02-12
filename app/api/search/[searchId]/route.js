import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";
export async function GET(request, params) {
	await connectDB();
	const searchData = params.params.searchId;
	if (!searchData) {
		console.log('Search data is missing');
		return new Response(JSON.stringify({ error: 'Search data is missing' }), { status: 400 });
	};
	try {
		const searchResult = await Item.find({
			$or: [
			{ title: { $regex: new RegExp(searchData, 'i') } },
			{ category: { $regex: new RegExp(searchData, 'i') } }
			]
		});
		if (searchResult.length === 0) {
			console.log('No items found');
			return new Response(JSON.stringify({ message: 'No items found' }));
		};
		return new Response(JSON.stringify(searchResult));
	} catch (error) {
		console.log('Error in search:', error.message);
		return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
	};
};