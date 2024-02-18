import connectDB from "@app/utils/connectDB";
import BlogPost from "@models/BlogPost";

export async function GET(request, params) {
	await connectDB();
	const userId = params.params.userId;
	const userBlogs = await BlogPost.find({owner: userId});
	return new Response(JSON.stringify(userBlogs));
};