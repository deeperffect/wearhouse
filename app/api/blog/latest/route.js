import connectDB from "@app/utils/connectDB";
import BlogPost from "@models/BlogPost";
export async function GET(request) {
	await connectDB();
	const numberOfBlogs = request.nextUrl.searchParams.get('limit');
	try {
		const latestBlogs = await BlogPost.find({})
		.sort({ createdAt: -1 })
		.limit(numberOfBlogs);
		return new Response(JSON.stringify(latestBlogs));
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ error: 'Error fetching items' }), { status: 500 });
	};
};