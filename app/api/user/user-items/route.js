import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";
export async function GET(request, params) {
	await connectDB();
	try{
		const userId = params.params.userId;
		const userItems = await Item.find({owner: userId});
		return new Response(JSON.stringify(userItems));
	} catch (error) {
		return new Response(JSON.stringify(error));
	}
};