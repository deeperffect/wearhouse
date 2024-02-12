import connectDB from "@app/utils/connectDB";
import BlogPost from "@models/BlogPost";
export async function POST(request) {
	await connectDB();
	const {blogId, userId} = await request.json();
	const blogFound = await BlogPost.findById(blogId);
	if(blogFound.likes.includes(userId)) {
		return new Response(JSON.stringify({error: 'User already liked this post'}));
	};
	blogFound.likes.push(userId);
	await blogFound.save();
	return new Response(JSON.stringify(blogFound));
};