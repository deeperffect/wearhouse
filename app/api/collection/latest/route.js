import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";
export async function GET(request) {
	await connectDB();
	const numberOfItems = request.nextUrl.searchParams.get('limit');
	try {
		const latestItems = await Item.find({})
		.sort({ createdAt: -1 })
		.limit(numberOfItems);
		return new Response(JSON.stringify(latestItems));
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ error: 'Error fetching items' }), { status: 500 });
	};
};