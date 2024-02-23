import connectDB from "@app/utils/connectDB";
import BlogPost from "@models/BlogPost";
export async function GET(request) {
	await connectDB();
	try {
		const userBlogs = await BlogPost.find({ official: false });
		const officialBlogs = await BlogPost.find({ official: true });
		return new Response(JSON.stringify({ userBlogs, officialBlogs }));
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ error: 'Error fetching blogs' }), { status: 500 });
	};
};